const express = require('express');
// const mongoose = require('mongoose');
const connectDb=require('./config/db');
const dotenv=require('dotenv');
const cors=  require('cors')
const bodyParser = require('body-parser')

// All routes
const authRoutes =require('./routes/authRoute');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDb();

const app=express();
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api/auth',authRoutes)
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

// for images
app.use('/uploads', express.static('uploads'));



// app.get("/",(req,res)=>{
//     res.send("Hello");
// })


















const PORT=5000;

app.listen(PORT,()=>{
    console.log("Server start")
});


