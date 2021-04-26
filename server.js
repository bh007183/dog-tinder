const express = require("express");
const mongoose = require("mongoose")
const app = express();
const cors = require("cors");
const placeholder = require("./routes/liked-routes.js")
const path = require("path");

// Sets up the Express App
var PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors())

// Static directory

/////////////////////////////////

app.use(placeholder)



// ... other app.use middleware 

  app.use(express.static("client/build"));


// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/elDoggo", {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
  });



  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
