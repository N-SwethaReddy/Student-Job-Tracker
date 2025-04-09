import React from 'react';

const ListJobApplications = ({ applications }) => {
  return (
    <div className="mt-4">
      <h4 className="mb-3">📋 Application List</h4>
      {applications.length === 0 ? (
        <p>No applications yet. Start by adding one!</p>
      ) : (
        <ul className="list-group">
          {applications.map((app, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{app.company}</strong> - {app.position}
              </div>
              <span className={`badge bg-${getStatusColor(app.status)} rounded-pill`}>
                {app.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'Applied':
      return 'secondary';
    case 'Interviewing':
      return 'info';
    case 'Offered':
      return 'success';
    case 'Rejected':
      return 'danger';
    default:
      return 'dark';
  }
};

export default ListJobApplications;