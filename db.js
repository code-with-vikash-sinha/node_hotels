const moongoose = require("mongoose");
require('dotenv').config();
//define the Mongodb connection Url

//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURl = process.env.MONGODB_URL;

//Set up MongoDB connection
moongoose.connect(mongoURl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Get the default connection object representing the MongoDB connection.

const db = moongoose.connection;

//Define event Listeners for Database connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});
db.on('error',(err)=>{
    console.error('MongoDB connection error');
});
db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

//Export the database connection

module.exports = db;