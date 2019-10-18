const express = require('express');

const routes = express.Router();

const projects = [];

//login page
routes.get('/',(req,res)=>{
  return res.send('Hello World');
});

//list all projects n' tasks
routes.get('/projects',(req,res)=>{
  return res.json(projects);
});


// add project [ { id: 1, title: 'title', tasks: ['new task'] } ];
routes.post('/projects',(req,res)=>{
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});


// edit projetc title
routes.put('/projects/:id',(req,res)=>{
  const { title } = req.body;
  const { id } = req.params;

  const project = projects.find(p => p.id == id);
  project.title = title;

  return res.json(project);
});

// delete project 
routes.delete('/projects/:id',(req,res)=>{
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);
  
  projects.splice(projectIndex, 1);

  return res.send();
});

// edit project [ { id: 1, title: 'title', tasks: ['new task'] } ];
routes.post('/projects/:id/tasks',(req,res)=>{
  return res.send('Hello curumin');
});


module.exports = routes;