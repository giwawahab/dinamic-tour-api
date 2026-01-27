const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = require("./app");
const connectDatabases = require("./config/db");


let localDB, atlasDB;

(async () => {
  const connections = await connectDatabases();
  localDB = connections.localDB;
  atlasDB = connections.atlasDB;
})();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
