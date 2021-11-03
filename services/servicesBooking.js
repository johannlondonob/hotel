const BookingModel = require( '../models/Booking.js' )

async function newBooking( booking ) {
    let newBooking = new BookingModel( booking )
    return await newBooking.save()
}

async function getBooking( id ) {
    return BookingModel.findById( id )
}

async function getBookings() {
    return BookingModel.find()
}

async function updateBooking( id, booking ) {
    return BookingModel.findByIdAndUpdate( id, booking )
}

async function deleteBooking( id ) {
    return BookingModel.findByIdAndDelete( id )
}

module.exports = { newBooking, getBooking, getBookings, updateBooking, deleteBooking }
