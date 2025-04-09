import React, { useState } from 'react';

const AddJobApplication = ({ onAdd }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('Applied');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!company || !position) return;
    onAdd({ company, position, status });
    setCompany('');
    setPosition('');
    setStatus('Applied');
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
      <h4 className="mb-3">Add New Application</h4>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Applied</option>
          <option>Interviewing</option>
          <option>Offered</option>
          <option>Rejected</option>
        </select>
      </div>
      <button className="btn btn-primary w-100">Add Application</button>
    </form>
  );
};

export default AddJobApplication;