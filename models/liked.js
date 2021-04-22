const mongoose = require("mongoose")


const LikedSchema = new mongoose.Schema({

    name: String,
    description: String,
    pic: String

})

const Liked = mongoose.model("Liked", LikedSchema)
module.exports = Liked
