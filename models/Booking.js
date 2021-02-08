const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateBooked: {
        type: String,
        required: true
    },
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
})

module.exports = Booking = mongoose.model('Booking', bookingSchema)