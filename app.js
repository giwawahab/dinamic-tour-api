const fs = require("fs");

const express = require("express");
const app = express();

app.use(express.json());

app.r



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
