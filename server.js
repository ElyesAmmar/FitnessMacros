const express = require("express");
require("dotenv").config({path:"./config/.env"});
const database = require("./config/db");
const userRoute = require('./routes/userRoute');
const macrosRoute = require('./routes/daily_nutritionRoute');
const foodRoute = require('./routes/foodRoute');

const PORT =  process.env.PORT || 7011;
const App = express();
App.use(express.json());
// Add middleware to set the CORS headers
App.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token');
    next();
  });


const connectDB = async() =>{
    try {
        await database.sync({ alter: true });
    } catch (error) {
        console.log(error);
    }
}
connectDB();

App.use('/api/users', userRoute );
App.use('/api/daily_nutrition', macrosRoute );
App.use('/api/food', foodRoute);

App.listen(PORT, (err)=>{
    if (err) {
        console.log(err); 
    } else {
        console.log(`server is running on ${PORT}`);
    }
})