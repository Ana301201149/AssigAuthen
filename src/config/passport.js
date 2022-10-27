// Here I use strategy from passport

const passport = require ('passport');
const LocalStrategy = require ('passport-local').Strategy;
const User = require ('../models/User');

passport.use(new LocalStrategy({

    usernameField: 'email',
    passwordField: 'password'

}, async (email, password, done ) =>{

    //match email user
    const user = await User.findOne ({email})
    //validation

    if (!user) {
        return done(null, false, { message: 'Not user Found'});
    } else {
        // Match password user
        const match = await user.matchPassword(password);
        if (match) {
            return done (null, user);
        }else {
            return done (null, false, {message: 'Incorrect password'});
        }
    }

}));

//serializeuser function to save and check id of user

passport.serializeUser((user, done) =>{
    done (null, user.id);
});

passport.deserializeUser((id, done) =>{
    User.findById (id, (err, user) => {
        done (err, user);
    })
});