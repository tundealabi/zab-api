//load information/secrets in the .env file so that we can access it with the config npm package
require("dotenv").config();
const express = require("express");

// --------------------------

//  

// --------------------------

// --------------------------

//  start the mongodb server

require("./db/db-connect");

// --------------------------

const app = express();

//USE WHATEVER PORT IS AVAILABLE OR 5000
const port = process.env.PORT || 5000;

// FOR ERROR HANDLING
app.use((err,req,res,next) => {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error:err
    });
});

//  START THE SERVER
app.listen(port,() => console.log(`Server is hot @ ${port}`));