console.log("planet.js is running");

const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Planet name must 2 characters or more"]
    },
    color: {
        type: String,
        required: true
    },
    numMoons: {
        type: Number,
        required: true
    },
    hasRings: {
        type: Boolean,
        required: true
    },
    facts: []
}, {timestamps: true});

mongoose.model("Planet", PlanetSchema);
