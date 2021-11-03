const { model, Schema } = require( 'mongoose' )

const RoomModel = Schema( {
    roomName: {
        type: String,
        required: true
    },
    roomPhoto: {
        type: String,
        required: true
    },
    roomDescription: {
        type: String,
        required: true
    },
    roomAdultPricePerNight: {
        type: Number,
        required: true
    },
    roomChildPricePerNight: {
        type: Number,
        required: true
    }
} )

module.exports = model( 'room', RoomModel )
