const express = require( 'express' )
const { connectDatabase } = require( '../database/connection' )
const routes = require( '../routes/routes.js' )
const cors = require( 'cors' )

class ModelServer {
    constructor() {
        this.app = express()
        this.initDatabase()
        this.middlewares()
        this.router()
    }

    initServer() {
        this.app.listen( process.env.PORT, () => {
            console.log( `Servidor encendido... ${ process.env.PORT }` )
        } )
    }

    router() {
        this.app.use( '/', routes )
    }

    initDatabase() {
        connectDatabase()
    }

    middlewares() {
        this.app.use( express.json() )
        this.app.use( cors() )
    }

}

module.exports = ModelServer
