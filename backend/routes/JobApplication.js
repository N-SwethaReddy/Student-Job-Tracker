// routes/jobApplications.js
const express = require('express');
const router = express.Router();
const { getJobApplications, addJobApplication, updateJobApplication, deleteJobApplication } = require('../controllers/jobApplicationController');

router.get('/', getJobApplications);
router.post('/', addJobApplication);
router.patch('/:id', updateJobApplication);
router.delete('/:id', deleteJobApplication);

module.exports = router;