// controllers/jobApplicationController.js
const JobApplication = require('../models/JobApplication');

// Get all job applications
exports.getJobApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find();
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching applications' });
  }
};

// Add a new job application
exports.addJobApplication = async (req, res) => {
  const { company, role, status, date, link } = req.body;
  const newApplication = new JobApplication({ company, role, status, date, link });
  try {
    await newApplication.save();
    res.status(201).json({ message: 'Job Application added' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding application' });
  }
};

// Update job application status
exports.updateJobApplication = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedApp = await JobApplication.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(updatedApp);
  } catch (err) {
    res.status(500).json({ message: 'Error updating status' });
  }
};

// Delete job application
exports.deleteJobApplication = async (req, res) => {
  const { id } = req.params;
  try {
    await JobApplication.findByIdAndDelete(id);
    res.status(200).json({ message: 'Job Application deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting application' });
  }
};