const express = require("express")
const { Intro } = require("../models/intro.schema")
const router = express.Router()

router.route("/").get(async (req, res) => {
    try {

        const response = await Intro.findOne()

        res.status(200).json({
            success: true,
            data: response
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            data: error
        })
        console.log(error)
    }
})


module.exports = router