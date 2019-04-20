var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Form = require('../models/form');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
    res.render('register',{title:'Register'});
});
router.get('/delete', function(req, res, next) {
    res.render('delete',{title:'Delete'});
});
router.get('/login', function(req, res, next) {
    res.render('login',{title: 'Login'});
});

router.get('/search', function(req, res, next) {
    res.render('searchPeople',{title: 'Search'});
});

router.get('/form', function(req, res, next) {
    res.render('form',{title: 'Form'});
});

router.post('/login',
    passport.authenticate('local',{failureRedirect:'/users/login', failureFlash: 'Invalid username or password'}),
    function(req, res) {
        req.flash('success', 'You are now logged in');
        res.redirect('/');
    });

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(function(username, password, done){
    User.getUserByUsername(username, function(err, user){
        if(err) throw err;
        if(!user){
            return done(null, false, {message: 'Unknown User'});
        }

        User.comparePassword(password, user.password, function(err, isMatch){
            if(err) return done(err);
            if(isMatch){
                return done(null, user);
            } else {
                return done(null, false, {message:'Invalid Password'});
            }
        });
    });
}));


router.post('/register', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    req.checkBody('name','Name field is required').notEmpty();
    req.checkBody('email','Email field is required').notEmpty();
    req.checkBody('email','Email is not valid').isEmail();
    req.checkBody('username','Username field is required').notEmpty();
    req.checkBody('password','Password field is required').notEmpty();
    req.checkBody('password2','Password do not match').equals(req.body.password);

    var errors = req.validationErrors();

    //console.log(res.body);

    if(errors){
        res.render('register',{
            errors: errors
        });
    } else {
        var newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        });
        User.createUser(newUser,function (err,user) {
            if(err) throw err;
            console.log(user);
        });
        req.flash('success','You are now registered and can login');

        res.location('/users/login');
        res.redirect('/users/login');

    }


});

//form

router.post('/form', function(req, res) {
    var city = req.body.city;
    var state = req.body.state;
    var name1 = req.body.name1;
    var surname = req.body.surname;
    var email1 = req.body.email1;
    var university = req.body.university;
    var position = req.body.position;
    var textarea = req.body.textarea;
    //var agreementCheckbox = req.body.agreement;


    //console.log(req.body);
    //console.log(req.body.agreement);
    //console.log(agreementCheckbox);


    req.checkBody('name1','Name field is required').notEmpty();
    req.checkBody('surname','Surname field is required').notEmpty();
    req.checkBody('email1','Email field is required').notEmpty();
    req.checkBody('email1','Email is not valid').isEmail();
    req.checkBody('city','City field is required').notEmpty();
    req.checkBody('state','State field is required').notEmpty();
    req.checkBody('position','Position field is required').notEmpty();
    req.checkBody('textarea','Textarea field is required').notEmpty();

    var errors = req.validationErrors();

    if(errors){
        res.render('form',{
            errors: errors
        });
    } else {
        var newForm = new Form({
            name1: name1,
            surname: surname,
            email1: email1,
            city: city,
            state: state,
            university: university,
            position: position,
            textarea: textarea

        });
        Form.createForm(newForm,function (err,form) {
            if(err) throw err;
            console.log(form);
        });

    req.flash('success','Great');

    res.location('/');
    res.redirect('/');
    }
});


router.post('/search', function(req, res) {

        var valueToSearch = req.body.value;
        var option = req.body.optionChoose;
       // console.log(option);


        Form.getFormByValue(option,valueToSearch,function(err, form) {
        for(var a=0;a<form.length;a++) {
            req.flash('success', form[a].toString());
        }
            res.location('/users/search');
            res.redirect('/users/search');
        });
});

router.post('/delete', function(req, res) {

    var valueToDelete = req.body.deleteButton;
    console.log(valueToDelete);

    Form.DeleteFormByValue(valueToDelete,function(err, form) {
        res.location('/users/delete');
        res.redirect('/users/delete');
    });

});

router.get('/logout',function (req,res) {
   req.logout();
   req.flash('success','You are now logged out');
   res.redirect('/users/login');
});

module.exports = router;
