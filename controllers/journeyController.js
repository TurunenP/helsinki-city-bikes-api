/**
 * This is the Api Controller for the application
 */


const express = require('express');

const Journey = require('../models/journey');

// connect to the database

const connectDB = require('../config/db');

connectDB();




// Get all journeys

const getJourneys = async (req, res) => {

//    paginate

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;

    const endIndex = page * limit;

    const results = {};

    if (endIndex < await Journey.countDocuments().exec()) {
        results.next = {
            page: page + 1,
            limit,
        };
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit,
        };
    }

    try {
        results.results = await Journey.find().limit(limit).skip(startIndex).exec();
        res.json(results);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }


   
 







}



module.exports = {
    getJourneys,
   
}







    
