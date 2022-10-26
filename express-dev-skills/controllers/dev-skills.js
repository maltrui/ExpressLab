 // controllers/dev-skills.js
const DevSkill = require('../models/dev-skills')

 module.exports = {
    index,
    show,
    new: newDevSkill,
    create,
    delete: deleteOne
  };
  
  function index(req, res) {
    res.render('dev-skills/index', {
      devSkills: DevSkill.getAll()
    });
  }
  function show(req, res) {
    res.render('dev-skills/show', {
      devSkills: DevSkill.getOne(req.params.id),
    });
  }

  function newDevSkill(req, res){ 
    res.render('dev-skills/new')
  }

  function create(req, res){
    DevSkill.create(req.body)
    res.redirect('/dev-skills')
  }

  function deleteOne(req, res){
    DevSkill.deleteOneSkill(req.params.id)
    res.redirect('/dev-skills')
  }
