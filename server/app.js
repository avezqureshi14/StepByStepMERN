const dotenv = require('dotenv')
const express = require('express');
const cookieParser = require("cookie-parser")
const app = express();

//During 7th Step Creating Separate folder for routes
app.use(express.json());
app.use(require('./routes/auth'))
app.use(cookieParser());
// During 4th Step Securing API key and PORT
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

//During 5th Step Creating Separate folder for Connection
require('./db/connection')




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT} ` )
})