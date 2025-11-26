const express = require('express');
// const mongoose = require('mongoose');
const connectDb=require('./config/db');
const dotenv=require('dotenv');
const authRoutes =require('./routes/authRoute');
const cors=  require('cors')
const bodyParser = require('body-parser')

dotenv.config();
connectDb();

const app=express();
app.use(cors());
app.use(bodyParser.json())

app.use('/api/auth',authRoutes)

app.get("/",(req,res)=>{
    res.send("Hello");
})


















const PORT=5000;

app.listen(PORT,()=>{
    console.log("Server start")
});


