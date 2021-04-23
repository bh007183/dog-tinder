const router = require("express").Router()
const db = require("../models")
const mongojs = require("mongojs")

router.post("/api/liked", async (req, res) => {
    let data = await db.Liked.create(req.body).catch(err => res.status(404).json(err))
    res.json(data)
})


router.get("/api/getliked", async (req, res) => {
    
    let data = await db.Liked.find().catch(err => console.log(err))
    res.json(data)
})


router.delete("/api/deleteliked/:_id", async (req, res) => {
    let data = await db.Liked.deleteOne({_id: mongojs.ObjectID(req.params._id)}, req.body).catch(err => console.log(err))
    res.json(data)
})


module.exports = router