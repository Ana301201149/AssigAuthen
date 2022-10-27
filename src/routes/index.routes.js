const { Router } = require('express');
const router = Router();


const { renderIndex, renderAbout, renderProjects, renderServices, renderContact } = require('../controllers/index.controller');

router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/projects', renderProjects);
router.get('/services', renderServices);
router.get('/contact', renderContact);



module.exports = router;