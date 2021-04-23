const mongoose = require("mongoose")


const LikedSchema = new mongoose.Schema({

    message: {
        type: String,
        unique: true,
    }
   

})

const Liked = mongoose.model("Liked", LikedSchema)
module.exports = Liked
