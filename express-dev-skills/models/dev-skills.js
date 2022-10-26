const devSkills = [
    {id: 1, skill: 'HTML', learn: true},
    {id: 2, skill: 'CSS', learn: true},
    {id: 3, skill: 'DOM', learn: true},
    {id: 4, skill: 'Express', learn: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return devSkills;
  }
  function getOne(id) {
    id = parseInt(id);
    return devSkills.find(skill => skill.id === id);
  }