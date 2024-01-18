const express = require("express");
require("dotenv").config({path:"./config/.env"});
const database = require("./config/db");
const userRoute = require('./routes/userRoute');
const macrosRoute = require('./routes/macrosRoute');

const PORT =  process.env.PORT || 7011;
const App = express();
App.use(express.json());

const connectDB = async() =>{
    try {
        await database.sync({ alter: true });
    } catch (error) {
        console.log(error);
    }
}
connectDB();

App.use('/api/users', userRoute );
App.use('/api/macros', macrosRoute );

App.listen(PORT, (err)=>{
    if (err) {
        console.log(err); 
    } else {
        console.log(`server is running on ${PORT}`);
    }
})