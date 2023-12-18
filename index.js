const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('bodyparser');

const app = express();
//connect to mongoDB mongoose.connect('mongodb://localhost/emr',{useNewUrlParser:true, useUnifiedTopology:true});

//Middleware
app.use(bodyParser());

//import routes 
const patientRoutes = require('./routes/encounters');

//use routes
app.use('/pastient',patientRoutes);
app.use('/encounters',encountersRoutes);

const port = process.env.PORT || 3000;
app.listen(port,() => {
    console.log(server running on port ${port});
});