/**
 *  This is the route file for the application
 */

const express = require('express');

const router = express.Router();


// Import the controllers

const { getJourneys,addjourney,getJourney} = require('../controllers/journeyController');

const {mapStationAndJourney} = require('../controllers/journeyStationsController');



// Journey routes
router.get('/journeys', getJourneys);

router.get('/journey/:id', getJourney);

router.post('/journey', addjourney);

// Station routes

const { getStations,addStation,getStation,updateStation} = require('../controllers/stationController');

router.get('/stations', getStations);

router.get('/stations/:id', getStation);

router.post('/stations', addStation);

router.put('/stations/:id', updateStation);

// Journey Stations routes
router.get('/journeystations/:id', mapStationAndJourney);













module.exports ={
    router: router,

}