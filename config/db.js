/**
 * This file is used to configure the database connection.
 */

// load env file

require('dotenv').config();

const mongoose = require('mongoose');

const MONGODB_URL = "mongodb+srv://doadmin:3Cn2Kp4jcJ80W659@db-mongodb-nyc1-22526-ccc29d80.mongo.ondigitalocean.com/admin?retryWrites=true&w=majority"

// const MONGODB_URL = process.env.MONGODB_URL;



const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       

        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
    };


module.exports = connectDB;

