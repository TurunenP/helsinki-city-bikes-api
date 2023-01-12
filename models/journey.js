/**
 *  Journey Model
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;


const journeySchema = new Schema({
    departure: { type: Date, required: true },
    return_date: { type: Date, required: true },
    departure_station_id: { type: Number, required: true },
    departure_station_name: { type: String, required: true },
    return_station_id: { type: Number, required: true },
    return_station_name: { type: String, required: true },
    covered_distance_meters: { type: Number, required: true },
    duration_in_sec: { type: Number, required: true },

// set collection name
}, {
    collection: 'journey'
});

const Journey = mongoose.model('journey', journeySchema);


module.exports = Journey;

// This is the model for the journey data in mongoDB


// 'Departure': 'departure', 
// 'Return': 'return_date',
// 'Departure station id': 'departure_station_id',
// 'Departure station name': 'departure_station_name',
// 'Return station id': 'return_station_id',
// 'Return station name':'return_station_name',
// 'Covered distance (m)':'covered_distance_meters',
// 'Duration (sec.)':'duration_in_sec'