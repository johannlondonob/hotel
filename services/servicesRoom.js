const RoomModel = require( '../models/Room.js' )

async function newRoom( room ) {
    let newRoom = new RoomModel( room )
    return await newRoom.save()
}

async function getRoom( id ) {
    return RoomModel.findById( id )
}

async function getRooms() {
    return RoomModel.find()
}

async function updateRoom( id, room ) {
    return RoomModel.findByIdAndUpdate( id, room )
}

async function deleteRoom( id ) {
    return RoomModel.findByIdAndDelete( id )
}

module.exports = { newRoom, getRoom, getRooms, updateRoom, deleteRoom }
