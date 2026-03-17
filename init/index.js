if(process.env.NODE_ENV != "production"){
    require('dotenv').config()    
}

// Initialization Logic

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// local system mongoDB database
const MONGO_URL = "mongodb://127.0.0.1:27017/travellister";

// cloud or Mongo Atlas mongoDB database 
// const dbURL = process.env.ATLASDB_URL; 

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
})

async function main(){
    mongoose.connect(MONGO_URL); // mongoose connects with local system mongoDB database
    // mongoose.connect(dbURL);  // mongoose connects with cloud mongoDB database
}

const initDB = async () => {
    await Listing.deleteMany();

    // Adding Owner Property in all Listings
    // using spread so that, all remaining fields remain as it is as before; just add a new field owner to all listings
    initData.data = initData.data.map((obj) => ({...obj, owner: "69b5221fdcc4e6ff4f1bdd85"}));

    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();