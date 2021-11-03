const mongoose = require( 'mongoose' )

let connectDatabase = async () => {
    try {
        await mongoose.connect( process.env.DATABASE )
        console.log( 'Conexíon a la base de datos establecida' )
    } catch (error) {
        console.log( `Conexión fallida ${ error }` )
    }
}

module.exports = { connectDatabase }
