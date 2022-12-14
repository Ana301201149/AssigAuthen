const { Router } = require('express');
const router = Router();

const { renderSignupForm, renderSigninForm, signup, signin, logout } = require('../controllers/users.controller')

// routes for sign in and out and up users

router.get('/users/signup', renderSignupForm);

router.post ('/users/signup', signup);

router.get ('/users/signin', renderSigninForm);

router.post ('/users/signin', signin);

router.get ('/users/logout', logout);


module.exports = router;