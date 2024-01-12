const express = require("express");
require("dotenv").config({path:"./.env"});
// const connectDB = require("./config/db")

const PORT =  process.env.PORT || 7011;
const App = express();



App.listen(PORT, (err)=>{
    if (err){
        console.log(err); 
    } else {
        console.log(`server is running on ${PORT}`);
    }
})