const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Tour = require("./../../models/tourModel");
dotenv.config({ path: "./config/config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
  console.log("Connected Successfully");
});

// Read JSON File
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8"),
);

// Import Data Into Database
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data Loaded Successfully!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// Delete All Data From Database
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data Deleted Successfully!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
