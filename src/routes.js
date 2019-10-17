const express = require('express');

const routes = express.Router();


//login page
routes.get('/',(req,res)=>{
  return res.send('Hello World');
});

//list all projects n' tasks
routes.get('/projects',(req,res)=>{
  return res.send('Hello curumin');
});

// edit projetc title
routes.put('/projects/:id',(req,res)=>{
  return res.send('Hello curumin');
});

// delete project 
routes.delete('/projects/:id',(req,res)=>{
  return res.send('Hello curumin');
});

// add project [ { id: 1, title: 'title', tasks: ['new task'] } ];
routes.post('/projects/:id/tasks',(req,res)=>{
  return res.send('Hello curumin');
});


module.exports = routes;