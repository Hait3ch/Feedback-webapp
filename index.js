const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys');

const app = express();

passport.use(new GoogleStrategy({
    cliendID: keys.googleClientID,
    clientSecret: keys.googleClientSecret 
}));


const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000);