const router = require("express").Router()
const db = require("../models")

router.post("/api/liked", async (req, res) => {
    let data = await db.Liked.create(req.body).catch(err => console.log(err))
    res.json(data)
})


router.get("/api/liked", async (req, res) => {
    let data = await db.Liked.find().catch(err => console.log(err))
    res.json(data)
})


router.delete("/api/liked", async (req, res) => {
    let data = await db.Liked.create(req.body).catch(err => console.log(err))
    res.json(data)
})


module.exports = router