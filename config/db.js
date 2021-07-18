const mongoose = require('mongoose');
const config = require('./config');

const mongooDb = async () => {
    try {
        await mongoose.connect(config.db.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
        console.log("Database successfully connected");
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = mongooDb;

