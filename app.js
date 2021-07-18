const express = require("express");
const bodyParser = require('body-parser');
const route = require('./routes/index');
const connectDb = require('./config/db');

const app = express();
const port = process.env.PORT || 5500;

// Database connection
connectDb();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(route);

// Listing server port
app.listen(port, (req, res) => {
    console.log(`App is listing to http://127.0.0.1:${port}`);
})