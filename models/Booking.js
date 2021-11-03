const { model, Schema } = require( 'mongoose' )

const BookingModel = Schema( {
    customerName: {
        type: String,
        required: true
    },
    customerLastname: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: true
    },
    bookingStartDate: {
        type: Date,
        required: true
    },
    bookingEndDate: {
        type: Date,
        required: true
    },
    bookingNumberGuests: {
        type: Number,
        required: true
    }
} )

module.exports = model( 'booking', BookingModel )
