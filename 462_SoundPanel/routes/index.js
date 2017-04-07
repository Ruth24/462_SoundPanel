var express = require('express');
var router = express.Router();
var blobFile = require('../models/blob');
var fs = require('fs');
var path = require('path');
var audio1 = path.join(__dirname, 'r');
var audio2 = path.join(__dirname, 'audio/audio2.mp3');
var audio3 = path.join(__dirname, 'audio/audio3.mp3');
var audio4 = path.join(__dirname, 'audio/audio4.mp3');
var audio5 = path.join(__dirname, 'audio/audio5.mp3');
var audio6 = path.join(__dirname, 'audio/audio6.mp3');
var audio7 = path.join(__dirname, 'audio/audio7.wav');
var audio8 = path.join(__dirname, 'audio/audio8.wav');
var audio9 = path.join(__dirname, 'audio/audio9.wav');
var audio10 = path.join(__dirname, 'audio/audio10.wav');
var audio11 = path.join(__dirname, 'audio/audio11.wav');
var audio12 = path.join(__dirname, 'audio/audio12.wav');
var audio13 = path.join(__dirname, 'audio/audio13.wav');
var audio14 = path.join(__dirname, 'audio/audio14.wav');
var audio15 = path.join(__dirname, 'audio/audio15.wav');
var audio16 = path.join(__dirname, 'audio/audio16.wav');

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	/* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });
	});

	router.get('/login', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('login', { message: req.flash('message') });
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/home',
		failureRedirect: '/login',
		failureFlash : true  
	}));

	router.post('/soundboard', function (req, res) {
		var newblob = blobFile({
            blob : req.body.blob
           });
           // Code to save it to database
           newblob.save(function(err) {
               if (err) throw err;
			   console.log('success');
               res.render('profile',{message: req.flash('message')});
           });
	});

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});

	/* GET Journal page */
	router.get('/journal', isAuthenticated, function(req, res){
		res.render('journal', { user: req.user });
	});

	/* GET Soundboard page */
	router.get('/soundboard', isAuthenticated, function(req, res){
		res.render('Soundboard', { user: req.user });
	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
		res.render('home', { user: req.user });
	});

	router.get('/audio1', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio1);
    	readStream.pipe(res);
	});
	
	router.get('/audio2', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio2);
    	readStream.pipe(res);
	});

	router.get('/audio3', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio3);
    	readStream.pipe(res);
	});

	router.get('/audio4', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio4);
    	readStream.pipe(res);
	});

	router.get('/audio5', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio5);
    	readStream.pipe(res);
	});

	router.get('/audio6', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio6);
    	readStream.pipe(res);
	});

	router.get('/audio7', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio7);
    	readStream.pipe(res);
	});

	router.get('/audio8', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio8);
    	readStream.pipe(res);
	});
	
	router.get('/audio9', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio9);
    	readStream.pipe(res);
	});

	router.get('/audio10', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio10);
    	readStream.pipe(res);
	});

	router.get('/audio11', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio11);
    	readStream.pipe(res);
	});

	router.get('/audio12', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio12);
    	readStream.pipe(res);
	});

	router.get('/audio13', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio13);
    	readStream.pipe(res);
	});

	router.get('/audio14', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio14);
    	readStream.pipe(res);
	});

	router.get('/audio15', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio15);
    	readStream.pipe(res);
	});

	router.get('/audio16', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio16);
    	readStream.pipe(res);
	});
	
	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}





