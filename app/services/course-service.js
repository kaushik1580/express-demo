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

const getAllCourse = async () => {
  const course = await Course.find();
  return course;
}

const updateCourse = async (id, body) => {
  const course = await Course.updateOne({
    _id: id,
  }, {
    $set: {
      name: body.name
    }
  });
  // course.name = body.name;
  // await course.save();
  return course;
}

module.exports = {
  addCourse,
  getCourse,
  getAllCourse,
  updateCourse
}