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

const addjourney = async (req, res) => {


    const { departure, return_date, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance_meters, duration_in_sec } = req.body;
    
    const journey = new Journey({
        departure,
        return_date,
        departure_station_id,
        departure_station_name,
        return_station_id,
        return_station_name,
        covered_distance_meters,
        duration_in_sec
    });


    try {
        const newJourney = await journey.save();
        res.status(201).json(newJourney);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
}


// get a single journey

const getJourney = async (req, res) => {
    try {
        const journey = await Journey.findById(req.params.id);
        res.json(journey);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}







module.exports = {
    getJourneys,
    addjourney,
    getJourney
    
}



    
