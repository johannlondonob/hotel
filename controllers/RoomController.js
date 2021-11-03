const { request, response } = require( 'express' )
const { getRoom, getRooms, newRoom, updateRoom, deleteRoom } = require( '../services/servicesRoom.js' )

let storingRoom = async ( req = request, res = response ) => {
    let data = req.body

    try {
        await newRoom( data )
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

let updatingRoom = async ( req = request, res = response ) => {
    let id = req.params.id
    let data = req.body

    try {
        await updateRoom( id, data )
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

let deletingRoom = async ( req = request, res = response ) => {
    let id = req.params.id
    let data = req.body

    try {
        await deleteRoom( id )
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

let gettingRooms = async ( req = request, res = response ) => {
    try {
        let bookings = await getRooms()
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

let gettingRoomById = async ( req = request, res = response ) => {
    let id = req.params.id

    try {
        let booking = await getRoom( id )
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

module.exports = { storingRoom, updatingRoom, deletingRoom, gettingRooms, gettingRoomById }
