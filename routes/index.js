/**
 *  This is the route file for the application
 */

const express = require('express');

const router = express.Router();


// Import the controllers

const { getJourneys,addjourney,getJourney} = require('../controllers/journeyController');



// Journey routes
router.get('/journeys', getJourneys);

router.get('/journeys/:id', getJourney);

router.post('/journeys', addjourney);

// Station routes

const { getStations,addStation,getStation,updateStation} = require('../controllers/stationController');

router.get('/stations', getStations);

router.get('/stations/:id', getStation);

router.post('/stations', addStation);

router.put('/stations/:id', updateStation);












module.exports ={
    router: router,

}