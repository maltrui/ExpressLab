var express = require('express');
var router = express.Router();

const devSkillController = require('../controllers/dev-skills')

router.get('/', devSkillController.index);
router.get('/', devSkillController.homePage)
router.get('/new', devSkillController.new);
router.get('/:id', devSkillController.show);
router.get('/:id/edit', devSkillController.edit)
router.post('/', devSkillController.create);
router.delete('/:id', devSkillController.delete);
router.put('/:id', devSkillController.update)


module.exports = router;
