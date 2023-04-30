const express = require( "express" );
const app = express();
require('dotenv').config(); // require .env file
const port = process.env.EXPRESS_PORT_PUBLIC; // default port to listen

// Parse request body as JSON
app.use(express.json())
// Set CORS policy
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:4200']
}));

app.post( "/api/donate", ( req: any, res: any ) => {
    console.log("Donation submitted!");
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );