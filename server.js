const express = require("express");
const mongoose = require("mongoose")
const app = express();
// const cors = require("cors");
const placeholder = require("./routes/liked-routes.js")
const path = require("path");

// Sets up the Express App
var PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var corsOptions = {
//   origin: 'https://bjh-hop-estore.herokuapp.com'
// }
// corsOptions
app.use(express.static(path.join(__dirname, 'client/build')));
// Static directory

/////////////////////////////////

app.use(placeholder)



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/elDoggo");



  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
