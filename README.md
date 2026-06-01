# NLP-Based Automated Cleansing for Healthcare Data

## Project Overview

NLP-Based Automated Cleansing for Healthcare Data is a web-based application designed to improve the quality and reliability of healthcare datasets through automated data preprocessing and cleansing techniques. The system utilizes Natural Language Processing (NLP) concepts to identify inconsistencies, missing values, duplicate records, formatting issues, and data anomalies in healthcare records.

The project aims to enhance healthcare data quality, making datasets more accurate, consistent, and suitable for analytics, reporting, and machine learning applications.

---

## Features

* Upload healthcare datasets in CSV format
* Automated data cleansing and preprocessing
* Detection of missing and inconsistent values
* Removal of duplicate records
* Standardization of healthcare data
* Data quality analysis and reporting
* Interactive dashboard for viewing results
* User-friendly web interface

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Libraries and Tools

* Axios
* Multer
* CSV Parser
* CORS

### Concepts Applied

* Natural Language Processing (NLP)
* Data Cleansing
* Data Preprocessing
* Data Standardization
* Healthcare Data Analytics

---

## Project Structure

```text
NLP-Healthcare-Data-Cleansing/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── uploads/
│
├── dataset/
│   └── healthcare_dataset.csv
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/nlp-healthcare-data-cleansing.git
```

### Step 2: Navigate to the Project Directory

```bash
cd nlp-healthcare-data-cleansing
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Application

```bash
node server.js
```

or

```bash
npm start
```

### Step 5: Open the Application

```text
http://localhost:3000
```

---

## System Workflow

1. User uploads a healthcare dataset.
2. The dataset is validated and processed.
3. NLP-based cleansing techniques are applied.
4. Duplicate, missing, and inconsistent records are identified.
5. Cleaned data is generated and stored.
6. Results and statistics are displayed through the dashboard.

---

## Key Functionalities

### Data Upload

Allows users to upload healthcare datasets for processing.

### Data Validation

Checks dataset structure and identifies formatting issues.

### Automated Cleansing

Removes duplicate entries and handles missing values.

### Data Standardization

Converts records into a consistent format for better analysis.

### Dashboard Analytics

Displays data quality metrics and cleansing results.

---

## Sample Dataset Format

```csv
Patient_ID,Age,Gender,Medical_Condition,Medication
1001,45,Male,Diabetes,Metformin
1002,60,Female,Hypertension,Amlodipine
1003,35,Male,Asthma,Salbutamol
```

---

## Future Enhancements

* Advanced NLP-based error correction
* Machine Learning-based anomaly detection
* Database integration
* PDF report generation
* User authentication and authorization
* Real-time healthcare data monitoring
* Cloud deployment support

---

## Learning Outcomes

This project provides practical experience in:

* Natural Language Processing (NLP)
* Healthcare Data Management
* Data Cleansing and Preprocessing
* Full Stack Web Development
* REST API Development
* Data Quality Assessment
* Data Analytics and Visualization

---

## Author

**Keerthi S M**  
Bachelor of Engineering (B.E.)  
ACS Engineering College
---

## Project Title

**NLP-Based Automated Cleansing for Healthcare Data**

---

## License

This project is developed for academic and educational purposes only.
