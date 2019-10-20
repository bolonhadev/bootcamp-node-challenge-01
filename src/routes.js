const express = require('express');

const routes = express.Router();

const projects = [];


function checkProjectExists(req, res, next){
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'Project not found' });
  }

  return next();
}

function countReq(req,res,next){
  console.count("Number of Requests");
  return next();
}

routes.use(countReq);

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
routes.put('/projects/:id', checkProjectExists, (req,res)=>{
  const { title } = req.body;
  const { id } = req.params;

  const project = projects.find(p => p.id == id);
  project.title = title;

  return res.json(project);
});

// delete project 
routes.delete('/projects/:id', checkProjectExists, (req,res)=>{
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);
  
  projects.splice(projectIndex, 1);

  return res.send();
});

// edit project [ { id: 1, title: 'title', tasks: ['new task'] } ];
routes.post('/projects/:id/tasks', checkProjectExists ,(req,res)=>{
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(p => p.id == id);

  project.tasks.push(title);
  return res.json(project);
});


module.exports = routes;