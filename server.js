const express = require("express");
const mongoose = require("mongoose")
const app = express();
// const cors = require("cors");
const placeholder = require("./routes/liked-routes.js")
const html = require("./routes/html")

// Sets up the Express App
var PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var corsOptions = {
//   origin: 'https://bjh-hop-estore.herokuapp.com'
// }
// corsOptions
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Static directory

/////////////////////////////////

app.use(placeholder)
app.use(html)

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

// Syncing our sequelize models and then starting our Express app
// =============================================================

// Change force: to true if it's cool for the site to remove database items.

  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
