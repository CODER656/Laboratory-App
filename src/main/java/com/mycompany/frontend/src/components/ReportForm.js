import React, { useState } from 'react';

const ReportForm = () => {
  const [file, setFile] = useState(null);
  const [report, setReport] = useState({
    fileNumber: '',
    patientName: '',
    patientId: '',
    diagnosisTitle: '',
    diagnosisDetails: '',
    reportDate: ''
  });

  const handleInputChange = (e) => {
    setReport({
      ...report,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log(report);
    console.log(file);
    // Reset form
    setFile(null);
    setReport({
      fileNumber: '',
      patientName: '',
      patientId: '',
      diagnosisTitle: '',
      diagnosisDetails: '',
      reportDate: ''
    });
  };

  return (
    <div>
      <h2>Rapor Tanımı</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Dosya Numarası:</label>
          <input type="text" name="fileNumber" value={report.fileNumber} onChange={handleInputChange} />
        </div>
        <div>
          <label>Hasta Ad ve Soyad:</label>
          <input type="text" name="patientName" value={report.patientName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Hasta Kimlik Numarası (TC):</label>
          <input type="text" name="patientId" value={report.patientId} onChange={handleInputChange} />
        </div>
        <div>
          <label>Koyulan Tanı Başlığı:</label>
          <input type="text" name="diagnosisTitle" value={report.diagnosisTitle} onChange={handleInputChange} />
        </div>
        <div>
          <label>Tanı Detayları:</label>
          <textarea name="diagnosisDetails" value={report.diagnosisDetails} onChange={handleInputChange} />
        </div>
        <div>
          <label>Raporun Verildiği Tarih:</label>
          <input type="date" name="reportDate" value={report.reportDate} onChange={handleInputChange} />
        </div>
        <div>
          <label>Fiziksel Rapora Ait Fotoğraf:</label>
          <input type="file" accept=".png, .jpg" onChange={handleFileChange} />
        </div>
        <button type="submit">Rapor Oluştur</button>
      </form>
    </div>
  );
};


  
    useEffect(() => {
      // Fetch the report data based on the editableReportId and populate the form fields
      if (editableReportId) {
        // Fetch the report data from the API or any other data source
        const reportData = fetchReportData(editableReportId); // Implement the function to fetch the report data
  
        // Populate the form fields with the fetched report data
        setTitle(reportData.title);
        // Set other form field state variables
      }
    }, [editableReportId]);
  
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Retrieve the updated data from the form fields
        const updatedTitle = e.target.elements.title.value;
        const updatedDescription = e.target.elements.description.value;
      
        // Identify the report being edited using the `editableReportId` state value
        const reportId = editableReportId;
      
        // Find the index of the report in the `reports` array based on the report ID
        const reportIndex = reports.findIndex((report) => report.id === reportId);
      
        if (reportIndex !== -1) {
          // Create a copy of the report to avoid directly mutating the state
          const updatedReport = { ...reports[reportIndex] };
      
          // Update the necessary properties of the report object with the new values
          updatedReport.title = updatedTitle;
          updatedReport.description = updatedDescription;
      
          // Create a new array of reports with the updated report
          const updatedReports = [...reports];
          updatedReports[reportIndex] = updatedReport;
      
          // Update the state with the updated reports array
          setReports(updatedReports);
      
          // Reset the editable report ID to indicate that editing is complete
          setEditableReportId(null);
      
          try {
            // Make the API request to update the report data on the server
            const response = await fetch(`/api/reports/${reportId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedReport),
            });
      
            // Check if the API request was successful
            if (response.ok) {
              // Perform any additional logic after successfully updating the report on the server
              console.log('Report updated successfully');
            } else {
              // Handle the error if the API request was not successful
              console.error('Failed to update the report');
            }
          } catch (error) {
            // Handle any error that occurred during the API request
            console.error('An error occurred', error);
          }
        }
      };
      
  
    return (
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* Other form fields */}
        <button type="submit">Save</button>
      </form>
    );
  };
  



export default ReportForm;
