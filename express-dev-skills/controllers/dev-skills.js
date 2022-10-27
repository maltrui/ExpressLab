 // controllers/dev-skills.js
const DevSkill = require('../models/dev-skills')

 module.exports = {
    index,
    show,
    new: newDevSkill,
    create,
    delete: deleteOne,
    edit,
    update
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

  function edit(req, res){
    res.render('dev-skills/edit', {
        devSkills: DevSkill.getOne(req.params.id) 
    })
  }

  function update(req,res){
    DevSkill.updateOne(req.params.id, req.body)
    
    //req.body.id = req.params.id
    //DevSkill.updateOne(req.body)
    res.redirect('/dev-skills/' + req.params.id)

  }



