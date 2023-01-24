const express = require("express");
const app = express();

require("dotenv").config();
require("./db");

const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture");

app.use("/pictures", pictureRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
