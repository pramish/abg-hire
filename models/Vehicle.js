const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Float32Array,
        required: true
    },
    availableDate: {
        type: String,
        required: true
    },
    vehiclePhoto: {
        type: String,
        // required: true
    }
})

module.exports = Vehicle = mongoose.model('Vehicle', vehicleSchema)