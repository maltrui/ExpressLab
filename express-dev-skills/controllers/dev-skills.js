 // controllers/dev-skills.js
const DevSkill = require('../models/dev-skills')

 module.exports = {
    index,
    show
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