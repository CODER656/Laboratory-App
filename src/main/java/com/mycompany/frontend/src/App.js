import React from 'react';
import ReportList from './components/ReportList';

const App = () => {
  const [editableReportId, setEditableReportId] = useState(null);

  return (
    <div>
      <h1>Lab Reports</h1>
      <ReportList handleEditReport={setEditableReportId} />
      {editableReportId && <ReportForm editableReportId={editableReportId} />}
    </div>
  );
};

export default App;

