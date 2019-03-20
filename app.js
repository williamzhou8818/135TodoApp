let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let cors = require('cors');
let passport = require('passport');

// Connect To Database 
let mongoose = require('mongoose');

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

// Check Error mongoose database conntion 

mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

const config  = require('./config/database');

let app = express();

let todoRoute = require('./routes/todo');
const users = require('./routes/users');

app.use(cors());

app.use((req, res, next) => {
    // console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    // res.send('')
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(todoRoute);
app.use('/users', users);

app.use(express.static('public'));

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send(`We think you're lost! `);
})

// Handler for Error 500 
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, './public/500.html'))
})  

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`TODO API has start on ${PORT}`));