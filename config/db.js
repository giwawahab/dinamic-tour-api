const mongoose = require("mongoose");

const connectDatabases = async () => {
  try {
    // Local MongoDB
    const localDB = mongoose.createConnection(process.env.DATABASE_LOCAL);

    localDB.on("connected", () => {
      console.log("Local MongoDB connected");
    });

    // Remote MongoDB (Atlas)
    const DB = process.env.DATABASE.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD,
    );
    const atlasDB = mongoose.createConnection(DB);

    atlasDB.on("connected", () => {
      console.log("MongoDB Atlas connected");
    });

    return { localDB, atlasDB };
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDatabases;
