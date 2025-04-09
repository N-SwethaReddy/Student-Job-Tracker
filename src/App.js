import React, { useState } from 'react';
import AddJobApplication from './components/AddJobApplication';
import ListJobApplications from './components/ListJobApplications';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [applications, setApplications] = useState([]);

  const handleAdd = (newApplication) => {
    setApplications([...applications, newApplication]);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🚀 Job Application Tracker</h1>
      <AddJobApplication onAdd={handleAdd} />
      <hr />
      <ListJobApplications applications={applications} />
    </div>
  );
};

export default App;