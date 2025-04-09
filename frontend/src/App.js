import React from 'react';
import AddJobApplication from './components/AddJobApplication';
import ListJobApplications from './components/ListJobApplications';

function App() {
  return (
    <div className="App">
      <h1>Job Application Tracker</h1>
      <AddJobApplication />
      <ListJobApplications />
    </div>
  );
}

export default App;