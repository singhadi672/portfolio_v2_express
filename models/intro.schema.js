const mongoose = require('mongoose')

const IntroSchema = new mongoose.Schema({
    userName: String,
    description: String,
    imgLink: String,

})

const Intro = mongoose.model('Intro', IntroSchema)

module.exports = { Intro }