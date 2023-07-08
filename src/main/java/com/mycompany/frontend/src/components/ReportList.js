import React, { useState } from 'react';

const [searchQuery, setSearchQuery] = useState('');
const [sortOrder, setSortOrder] = useState('asc');

<input
  type="text"
  placeholder="Search..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>



<button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
  Sort by Date ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
</button>


reports
  .filter((report) =>
    report.patientName.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .sort((a, b) =>
    sortOrder === 'asc'
      ? new Date(a.reportDate) - new Date(b.reportDate)
      : new Date(b.reportDate) - new Date(a.reportDate)
  )
  .map((report) => (
    <Report
      key={report.id}
      report={report}
      // Add other necessary props or event handlers here
    />
  ))
  


  const ReportList = ({ reports, onEditReport }) => {
    const [editingReportId, setEditingReportId] = useState(null);
  
    const handleEditReport = (reportId) => {
      setEditingReportId(reportId);
    };
  
    return (
      <div>
        <h2>Lab Reports</h2>
        {reports.map((report) => (
          <div key={report.id}>
            {editingReportId === report.id ? (
              // Render the editable form
              // Replace the following code with your own form implementation
              <form>
                <input type="text" value={report.title} />
                <textarea value={report.description} />
                <button type="submit">Save</button>
              </form>
            ) : (
              // Render the report details
              <>
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                <button onClick={() => handleEditReport(report.id)}>Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };
  


  const handleViewDetails = (report) => {
    setSelectedReport(report);
  };

  return (
    <div>
      {reports.map((report) => (
        <div key={report.id}>
          <h3>{report.title}</h3>
          <p>Patient Name: {report.patientName}</p>
          <p>Patient ID: {report.patientId}</p>
          {/* Display other report details */}
          <button onClick={() => handleViewDetails(report)}>View Details</button>
        </div>
      ))}
      {selectedReport && <ReportDetails report={selectedReport} />}
    </div>
  );
};


    const [reports, setReports] = useState([...]); // Replace `[...]` with your actual reports data
  
    const handleDeleteReport = (reportId) => {
      // Filter out the report with the given ID and update the reports state
      const updatedReports = reports.filter((report) => report.id !== reportId);
      setReports(updatedReports);
    };
  
    return (
      <div>
        <h1>Lab Reports</h1>
        {reports.map((report) => (
          <div key={report.id}>
            <h3>{report.title}</h3>
            <p>Patient Name: {report.patientName}</p>
            <p>Patient ID: {report.patientId}</p>
            <p>Diagnosis: {report.diagnosis}</p>
            <p>Report Date: {report.reportDate}</p>
            {/* Display other report details */}
            <img src={report.photo} alt="Report Photo" />
            <button onClick={() => handleDeleteReport(report.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  
  