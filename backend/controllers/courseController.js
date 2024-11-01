const Course = require('../models/Course');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// Create a new course
exports.createCourse = async (req, res) => {
  const { title, description, instructor } = req.body;

  try {
    const course = new Course({ title, description, instructor });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// Update a course
exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const course = await Course.findByIdAndUpdate(id, { title, description }, { new: true });
    if (!course) return res.status(404).send('Course not found');
    res.json(course);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByIdAndRemove(id);
    if (!course) return res.status(404).send('Course not found');
    res.json({ msg: 'Course removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
