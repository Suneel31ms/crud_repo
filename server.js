const express = require("express");
const dotenv = require("dotenv");
 const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

const connectDB = require("./server/database/connection");

dotenv.config({ path: "config.env" });
const port = process.env.PORT;

//log request
 app.use(morgan("tiny")); 

//database connection 
connectDB()


//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname,"views")) 

//load public
app.use("/css", express.static(path.resolve(__dirname, "public/css")));
app.use("/img", express.static(path.resolve(__dirname, "public/img")));
app.use("/js", express.static(path.resolve(__dirname, "public/js")));

app.use("/", require("./server/routes/router"));

app.listen(port, () => {
  console.log(`port-- http://localhost:${port}`);
});
