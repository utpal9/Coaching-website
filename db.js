const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

mongoose.set("strictQuery",false);

const connectDB = async()=>{
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected ${conn.connection.host}`.yellow.bold)
        
    } catch (err) {

        console.log(`Error : ${err.message}`);
        process.exit();
        
    }
}

module.exports = connectDB;