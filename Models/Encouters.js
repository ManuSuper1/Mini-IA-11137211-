const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    date: Date,
    time: String,
    typeOfEncounter: String,
    vitals: {
        bloodPressure: String,
        temperature: Number,
        pulse: Number,
        sp02: Number
    }
});

module.exports = mongoose.model('Encounter', encounterSchema);