/**
 *  This is the route file for the application
 */

const express = require('express');

const router = express.Router();


// Import the controllers

const { getJourneys} = require('../controllers/journeyController');




router.get('/journeys', getJourneys);







module.exports ={
    router: router,

}