const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");
const db = require("./models");
// Sets up the Express App
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var corsOptions = {
//   origin: 'https://bjh-hop-estore.herokuapp.com'
// }
// corsOptions
app.use(cors());
// Static directory
app.use(express.static("public"));
/////////////////////////////////
const placeholder = require("./routes/liked-routes.js")

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/elDoggo",
   { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false 
  });

// Routes
// =============================================================
app.use(placeholder)
// Syncing our sequelize models and then starting our Express app
// =============================================================

// Change force: to true if it's cool for the site to remove database items.

  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
