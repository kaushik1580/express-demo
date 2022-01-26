const Course = require('../models/course-model')

const addCourse = async (body) => {
  const course = new Course({
    name: body.name
  })
  await course.save();
  return course;
}

const getCourse = async (id) => {
  const course = await Course.findOne({
    _id: id
  });
  return course;
}

module.exports = {
  addCourse,
  getCourse
}