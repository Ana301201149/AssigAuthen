const usersCtrl = {};

const passport = require('passport');
const User = require('../models/User')
// function to user signup
usersCtrl.renderSignupForm = (req, res) => {

    res.render('users/signup');

};

usersCtrl.signup = async (req, res) => {
    const errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({ text: 'Password do not match' });
    }
    if (password.length < 4) {
        errors.push({ text: 'Password must be at least 4 characters.' });
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            name,
            email,
            password,
            confirm_password
        })
    } else {
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash('error_msg', 'The email is already in use.');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({ name, email, password });
            newUser.password = await newUser.encryptPassword (password)
            await newUser.save();
            req.flash ('success_msg', 'You are registered');
            res.redirect('/users/signin');
        }
    }
};
// function to user signin
usersCtrl.renderSigninForm = (req, res) => {

    res.render('users/signin');

};
//function to authentica user dat
usersCtrl.signin = passport.authenticate('local',{
    failureRedirect: '/users/signin',
    successRedirect: '/notes',
    failureFlash: true
})

// passport fucntin to user logout
usersCtrl.logout = (req, res) => {
    res.logout();
    res.flash ('sucess_msg', 'You are logged out now.');
    res.redirect ('/users/sigin');
};


module.exports = usersCtrl;