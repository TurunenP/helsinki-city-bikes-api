/**
 *  Station Model
 */

const mongoose = require('mongoose');

const { Schema } = mongoose;


const stationSchema = new Schema({
    FID: { type: Number, required: true },
    ID: { type: Number, required: true },
    Nimi: { type: String, required: true },
    Namn: { type: String, required: true },
    Name: { type: String, required: true },
    Osoite: { type: String, required: true },
    Adress: { type: String, required: true },
    Kaupunki: { type: String, required: true },
    Stad: { type: String, required: true },
    Operaattor: { type: String, required: true },
    Kapasiteet: { type: Number, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    


   

// set collection name
}, {
    collection: 'stations'
});

const Station = mongoose.model('station', stationSchema);


module.exports = Station;



// station model for the station data in mongoDB


// _id
// 63cd560af580cb17a920f51a
// FID
// 4
// ID
// 507
// Nimi
// "Golfpolku"
// Namn
// "Golfstigen"
// Name
// "Golfpolku"
// Osoite
// "Golfpolku 3"
// Adress
// "Golfstigen 3"
// Kaupunki
// "Espoo"
// Stad
// "Esbo"
// Operaattor
// "CityBike Finland"
// Kapasiteet
// 16
// x
// 24.796136
// y
// 60.168143

