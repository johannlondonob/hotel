require( 'dotenv' ).config()
const Server = require( './models/ModelServer.js' )

const app = new Server()

app.initServer()
