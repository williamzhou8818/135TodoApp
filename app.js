// Create Todo API

let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();

let todoRoute = require('./routes/todo');

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    // res.send('')
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json())

app.use(todoRoute);

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