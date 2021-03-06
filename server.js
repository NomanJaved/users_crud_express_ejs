const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

// for flash messages
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');



const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// For Flash messages
app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());

app.set('views', __dirname + '/app/view'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(express.static(path.join(__dirname, '/app/public'))); // configure express to use public folder

const mongoose = require('mongoose');
const dbfile = require('./config/db.config');

mongoose.connect(dbfile.url, {
    useNewUrlParser: true,
}).then(data => {
    console.log('Database Connected Succesfully');
}).catch(err => {
    console.log('Error in connecting database');
})

require('./app/routes/users.route')(app);

app.listen(3000, (request, response) => {
    console.log('Server is running on port 3000.');
})