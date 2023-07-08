import React from 'react';

const ReportDetails = ({ report }) => {
  return (
    <div>
      <h3>{report.title}</h3>
      <p>Patient Name: {report.patientName}</p>
      <p>Patient ID: {report.patientId}</p>
      <p>Diagnosis: {report.diagnosis}</p>
      <p>Report Date: {report.reportDate}</p>
      {/* Display other report details */}
      <img src={report.photo} alt="Report Photo" />
    </div>
  );
};

export default ReportDetails;
