const devSkills = [
    {id: 1, skill: 'HTML', learn: true},
    {id: 2, skill: 'CSS', learn: true},
    {id: 3, skill: 'DOM', learn: true},
    {id: 4, skill: 'Express', learn: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOneSkill
  };
  
  function getAll() {
    return devSkills;
  }
  function getOne(id) {
    id = parseInt(id);
    return devSkills.find(skill => skill.id === id);
  }

  function create(newDevSkill){
    newDevSkill.id = Date.now() % 100000
    newDevSkill.learn = false
    devSkills.push(newDevSkill)
    console.log(devSkills)
  }

  function deleteOneSkill(id){
    id = parseInt(id);
    const idx = devSkills.findIndex(skill => skill.id === id);
    devSkills.splice(idx, 1);
  }