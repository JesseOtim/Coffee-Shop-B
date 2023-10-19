// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from 'express';

dotenv.config();

//mongoDB connection string
const url = process.env.DB_URL;

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
  console.log('Database connected!');})
.catch(err => console.log(err));

export default app;