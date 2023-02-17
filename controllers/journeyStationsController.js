/**
 * This is the Api Controller for the application
 */


const express = require('express');

const Station = require('../models/station');
const Journey = require('../models/journey');

// connect to the database

const connectDB = require('../config/db');

connectDB();


// Get all stations

// map through the stations and return the station name and id and the journey name and id


const mapStationAndJourney = async (req, res) => {
    try {
        // const journey = await Journey.findById(req.params.id);

        const journey = await Journey.findById(req.params.id);

        // const stations = await Station.find(
        //     {
        //         FID: {
        //             $in: journey.departure_station_id && journey.return_station_id
        //         }
        //     }
        // );

        const dep_station = await Station.find(
            {
                ID: {
                    $in: journey.departure_station_id
                }

            }
        )

        const ret_station = await Station.find(
            {
                ID: {
                    $in: journey.return_station_id
                }

            }
        )


        res.json(
            {
                journey: journey,
                departure_station: dep_station,
                return_station: ret_station
            }
        );


        
      
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

 




    module.exports = {

        mapStationAndJourney,


    }




