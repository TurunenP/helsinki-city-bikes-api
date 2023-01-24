/**
 * This is the Api Controller for the application
 */


const express = require('express');

const Station = require('../models/station');

// connect to the database

const connectDB = require('../config/db');

connectDB();


// Get all stations

const getStations = async (req, res) => {

//    paginate

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;

    const endIndex = page * limit;

    const results = {};

    if (endIndex < await Station.countDocuments().exec()) {
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
        results.results = await Station.find().limit(limit).skip(startIndex).exec();
        res.json(results);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const getStation = async (req, res) => {
    try {
        const station = await Station.findById(req.params.id);
        res.json(station);
    }

    catch (e) {
        res.status(500).json({ message: e.message });
    }
}

const addStation = async (req, res) => {
    
    const { FID, ID, Nimi, Namn, Name, Osoite, Adress, Kaupunki, Stad, Operaattor, Kapasiteet, x, y } = req.body;

    const station = new Station({
        FID,
        ID,
        Nimi,
        Namn,
        Name,
        Osoite,
        Adress,
        Kaupunki,
        Stad,
        Operaattor,
        Kapasiteet,
        x,
        y,
    });

    try {
        const newStation = await station.save();
        res.status(201).json(newStation);
    }
    catch (e) {
        res.status(400).json({ message: e.message });
    }
}

const updateStation = async (req, res) => {
    try {
        const station = await Station.findById(req.params.id);
        if (station == null) {
            return res.status(404).json({ message: 'Cannot find station' });
        }

        if (req.body.FID != null) {
            station.FID = req.body.FID;
        }
        if (req.body.ID != null) {
            station.ID = req.body.ID;
        }
        if (req.body.Nimi != null) {
            station.Nimi = req.body.Nimi;
        }
        if (req.body.Namn != null) {
            station.Namn = req.body.Namn;
        }
        if (req.body.Name != null) {
            station.Name = req.body.Name;
        }
        if (req.body.Osoite != null) {
            station.Osoite = req.body.Osoite;
        }
        if (req.body.Adress != null) {
            station.Adress = req.body.Adress;
        }
        if (req.body.Kaupunki != null) {
            station.Kaupunki = req.body.Kaupunki;
        }
        if (req.body.Stad != null) {
            station.Stad = req.body.Stad;
        }
        if (req.body.Operaattor != null) {
            station.Operaattor = req.body.Operaattor;
        }
        if (req.body.Kapasiteet != null) {
            station.Kapasiteet = req.body.Kapasiteet;
        }
        if (req.body.x != null) {
            station.x = req.body.x;
        }
        if (req.body.y != null) {
            station.y = req.body.y;
        }
        const updatedStation = await station.save();
        res.json(updatedStation);
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
}
















module.exports = {
 
    getStations,
    getStation,
    addStation,
    updateStation,
    
    
}



    
