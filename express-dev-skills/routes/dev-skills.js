var express = require('express');
var router = express.Router();

const devSkillController = require('../controllers/dev-skills')

router.get('/', devSkillController.index);
router.get('/new', devSkillController.new);
router.get('/:id', devSkillController.show);
router.post('/', devSkillController.create);
router.delete('/:id', devSkillController.delete);

module.exports = router;
