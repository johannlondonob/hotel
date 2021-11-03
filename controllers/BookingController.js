const { request, response } = require( 'express' )
const { getBooking, getBookings, newBooking, updateBooking, deleteBooking } = require( '../services/servicesBooking.js' )

let storingBooking = async ( req = request, res = response ) => {
    let data = req.body

    try {
        await newBooking( data )
        res.status( 200 ).json( {
            ok: true,
            message: `Registro guardado con éxito.`
        } )
    } catch (e) {
        res.status( 400 ).json( {
            ok: false,
            message: 'La acción terminó en error.'
        } )
    }
}

let updatingBooking = async ( req = request, res = response ) => {
    let id = req.params.id
    let data = req.body

    try {
        await updateBooking( id, data )
        res.status( 200 ).json( {
            ok: true,
            message: `Registro ${ id } actualizado con éxito.`
        } )
    } catch (e) {
        res.status( 400 ).json( {
            ok: false,
            message: 'La acción terminó en error.'
        } )
    }
}

let deletingBooking = async ( req = request, res = response ) => {
    let id = req.params.id
    let data = req.body

    try {
        await deleteBooking( id )
        res.status( 200 ).json( {
            ok: true,
            message: `Registro ${ id } eliminado con éxito.`
        } )
    } catch (e) {
        res.status( 400 ).json( {
            ok: false,
            message: 'La acción terminó en error.'
        } )
    }
}

let gettingBookings = async ( req = request, res = response ) => {
    try {
        let bookings = await getBookings()
        res.status( 200 ).json( {
            ok: true,
            message: `Registros consultados con éxito.`,
            data: bookings
        } )
    } catch (e) {
        res.status( 400 ).json( {
            ok: false,
            message: 'La acción terminó en error.'
        } )
    }
}

let gettingBookingById = async ( req = request, res = response ) => {
    let id = req.params.id

    try {
        let booking = await getBooking( id )
        res.status( 200 ).json( {
            ok: true,
            message: `Registro ${ id } consultado con éxito.`,
            data: booking
        } )
    } catch (e) {
        res.status( 400 ).json( {
            ok: false,
            message: 'La acción terminó en error.'
        } )
    }
}

module.exports = { storingBooking, updatingBooking, deletingBooking, gettingBookings, gettingBookingById }
