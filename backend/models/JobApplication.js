// models/JobApplication.js
const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  date: String,
  link: String
});

module.exports = mongoose.model('JobApplication', jobApplicationSchema);