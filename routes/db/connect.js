


const dontenv = require("dotenv");
dontenv.config();

const MongoClient = require("mongodb").MongoClient;

let _db;

const initDb = async (callback) => {
  if (_db) {
    console.log("Db is already initialized!");
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
        _db = client.db();
        callback(null, _db);
    })
    .catch((err) => {
        callback(err);
    });
};

const getDb = () => {
    if (!_db) {
        throw Error("Db not initialized");
    }
    return _db;
};

module.exports = {
    initDb,
    getDb,
}


















/** const mongoose = require("mongoose");

const connectDB = async () => {
	const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

	await mongoose.connect(mongoUri);
	console.log("MongoDB connected");
};

module.exports = connectDB;
*/