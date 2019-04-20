var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',ensureAuthenticated ,function(req, res, next) {
  res.render('index', { title: 'Members' });
});
router.get('/users/form',ensureAuthenticated ,function(req, res, next) {
    res.render('form', { title: 'Form' });
});
router.get('/users/delete',ensureAuthenticated ,function(req, res, next) {
    res.render('delete', { title: 'Delete' });
});
router.get('/users/search',ensureAuthenticated ,function(req, res, next) {
    res.render('searchPeople', { title: 'Search' });
});


function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }                                 //wylogowanie, przekierowanie na zalogowanie
  res.redirect('/users/login');
}

module.exports = router;
