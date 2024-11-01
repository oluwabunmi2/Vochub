// routes/courses.js
const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// @route   POST /api/courses
// @desc    Create a new course
router.post('/', async (req, res) => {
  const { title, description, duration, createdBy } = req.body;

  try {
    const course = new Course({
      title,
      description,
      duration,
      createdBy,
    });

    await course.save();
    res.json(course);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET /api/courses
// @desc    Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().populate('createdBy', 'name email');
    res.json(courses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
