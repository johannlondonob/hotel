const { Router, response, request } = require( 'express' )
const path = require( 'path' )
const {
    gettingBookings,
    gettingBookingById,
    storingBooking,
    updatingBooking,
    deletingBooking
} = require( '../controllers/BookingController.js' )
const {
    gettingRooms,
    gettingRoomById,
    storingRoom,
    updatingRoom,
    deletingRoom
} = require( '../controllers/RoomController' )

const routes = Router()

routes.get( '/', ( req = response, res = request ) => {
    res.sendFile( path.join( __dirname, '../views/index.html' ) )
} )

routes.get( '/api/v1/booking', gettingBookings )

routes.get( '/api/v1/booking/:id', gettingBookingById )

routes.post( '/api/v1/booking', storingBooking )

routes.put( '/api/v1/booking/:id', updatingBooking )

routes.delete( '/api/v1/booking/:id', deletingBooking )

routes.get( '/api/v1/room', gettingRooms )

routes.get( '/api/v1/room/:id', gettingRoomById )

routes.post( '/api/v1/room', storingRoom )

routes.put( '/api/v1/room/:id', updatingRoom )

routes.delete( '/api/v1/room/:id', deletingRoom )

module.exports = routes
