const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/Pindie";

async function connectToDataBase() {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connection is ok");
    } catch (err) {
        console.log("Connection is NOT ok");
        console.log("err");
    }

    await mongoose.connect(DB_URL);
}

module.exports = connectToDataBase;