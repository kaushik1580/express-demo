const itemservice = require('../services/course-service')

const getCourseParam = (request, response) => {
  response.send(request.params); // ?sortBy=name
}

const addCourse = async (req, res) => {
  const body = req.body;
  const course = await itemservice.addCourse(body)
  return res.json(course);
}

const getCourse = async (req, res) => {
  const id = req.params.id;
  const course = await itemservice.getCourse(id);
  return res.json(course);
}

const getAllCourse = async (req, res) => {
  const course = await itemservice.getAllCourse();
  return res.json(course);
}

const updateCourse = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const course = await itemservice.updateCourse(id, body);
  return res.json(course);
}

const deleteCourse = async (req, res) => {
  const id = req.params.id;
  const course = await itemservice.deleteCourse(id);
  return res.json(course);
}
module.exports = {
  getCourseParam,
  addCourse,
  getCourse,
  getAllCourse,
  updateCourse,
  deleteCourse
}