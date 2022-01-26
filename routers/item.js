const Joi = require('joi');
const express = require('express');
const router = express.Router();
const itemcontroller = require('../app/controllers/item-controller')

const courses = [{
    id: 1,
    name: 'course 1'
  },
  {
    id: 2,
    name: 'course 2'
  },
  {
    id: 3,
    name: 'course 3'
  }
]

router.get('/api/courses/:month/:year', itemcontroller.getCourseParam);

/////////// GET REQUEST ////////////////

router.get('/', (request, response) => {
  response.send('Hello World');
});

router.get('/api/courses', itemcontroller.getAllCourse);

router.get('/api/courses/:id', itemcontroller.getCourse);

// (request, response) => {
//   // response.send(request.params.id);
//   const course = courses.find(c => c.id === parseInt(request.params.id));
//   if (!course) return response.status(404).send('The course with given id is not found')
//   else return response.send(course);
// }


///////// POST REQUEST ////////////

router.post('/api/courses', itemcontroller.addCourse)

/////////// PUT REQUEST ////////////


router.put('/api/courses/:id', itemcontroller.updateCourse)

// (request, response) => {
//   const course = courses.find(c => c.id === parseInt(request.params.id));
//   if (!course) return response.status(404).send("Course not found")
//   const {
//     error
//   } = validateCourse(request.body) // equi to result.error called object destructing
//   if (error) {
//     return response.status(400).send(error.details[0].message);
//   }

//   //update course 
//   //retun the updated course
//   course.name = request.body.name;
//   response.send(course);
// }



/////// DELETE REQUEST ///////////

router.delete('/api/courses/:id', itemcontroller.deleteCourse)

//  (request, response) => {
//    const course = courses.find(c => c.id === parseInt(request.params.id));
//    if (!course) return response.status(404).send("Course not found");

//    // delete
//    const index = courses.indexOf(course);
//    courses.splice(index, 1);

//    response.send(course);

//    //retun the course
//  }

console.log('reached');

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required()
  }
  return Joi.validate(course, schema);
}

module.exports = router;

// app.get('/api/courses/:month/:year', (req, res) => {
//   res.send(req.params);
// });