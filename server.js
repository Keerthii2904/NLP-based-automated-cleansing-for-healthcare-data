const express = require('express');
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
const upload = multer({ dest: 'uploads/' });

let processedData = [];

// IBM Watson credentials
const API_KEY = 'YeqAujexb1K4N7zg6yGZz7My4P3fHTbw-9dqJkJEhxrG';
const DEPLOYMENT_URL = 'https://au-syd.ml.cloud.ibm.com/ml/v4/deployments/2d745f58-ba88-4826-ba56-a5d2b5800297/predictions?version=2021-05-01';

// Get IAM token
async function getIamToken() {
  const response = await axios.post('https://iam.cloud.ibm.com/identity/token', new URLSearchParams({
    'grant_type': 'urn:ibm:params:oauth:grant-type:apikey',
    'apikey': API_KEY
  }), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  return response.data.access_token;
}

// Predict using IBM Watson
async function predictWithIBM(patients) {
  const token = await getIamToken();

  const fields = Object.keys(patients[0]);
  const values = patients.map(p => fields.map(f => p[f]));

  const payload = {
    input_data: [{ fields, values }]
  };

  const response = await axios.post(DEPLOYMENT_URL, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  const predictions = response.data.predictions[0].values.map(v => v[0]);
  return predictions;
}

// Upload endpoint
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const results = [];
  const filePath = path.join(__dirname, req.file.path);

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', async () => {
      try {
        const predictions = await predictWithIBM(results);
        processedData = results.map((patient, i) => ({
          ...patient,
          test_result: predictions[i]
        }));

        fs.unlink(filePath, () => {});
        res.json({ message: 'File processed', count: processedData.length });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to score data with IBM Watson' });
      }
    })
    .on('error', () => {
      res.status(500).json({ error: 'Error reading CSV file' });
    });
});

app.get('/api/data', (req, res) => res.json(processedData));

app.get('/api/metric', (req, res) => {
  if (!processedData.length) return res.json({ metric: 'N/A' });
  const normalCount = processedData.filter(d => d.test_result === 'Normal').length;
  const metric = ((normalCount / processedData.length) * 100).toFixed(1) + '%';
  res.json({ metric });
});

app.get('/api/predictions', (req, res) => {
  if (!processedData.length) return res.json({ counts: [0, 0, 0] });
  const labels = ['Normal', 'Inconclusive', 'Abnormal'];
  const counts = labels.map(label =>
    processedData.filter(d => d.test_result === label).length
  );
  res.json({ counts });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
