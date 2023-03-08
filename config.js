const mongoose = require('mongoose');
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const connectDB = async ()=> {
    try{ 
        const connectionString = `${process.env.MONGO_URL}/${process.env.MONGO_DB}`;
        console.log("Stablishing connection with the DB " + connectionString);
        await mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: false });
        console.info("DB Connection succeed");
    }catch(error){
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;