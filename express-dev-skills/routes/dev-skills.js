var express = require('express');
var router = express.Router();

const devSkillController = require('../controllers/dev-skills')

router.get('/', devSkillController.index);
router.get('/:id', devSkillController.show);

module.exports = router;
