const mongoose = require("mongoose");

const connectDB = async () => {
	const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

	await mongoose.connect(mongoUri);
	console.log("MongoDB connected");
};

module.exports = connectDB;
