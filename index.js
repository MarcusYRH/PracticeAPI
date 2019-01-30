const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
// set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/ninjago')
mongoose.Promise = global.Promise;
//db doesnt exist at first, but if it doesnt at first check, mongodb will auto create it for us
app.use(express.static('public'));

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api'));


// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});
// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});
//Now we need request handlers
