const express = require('express')
const cors = require('cors')
const env = require('dotenv')
const { dbConnection } = require('./database/connection.db')
const homeRouter = require('./routes/home.route')
const introRouter = require('./routes/intro.route')
const portfolioRouter = require('./routes/portfolio.route')
const experienceRouter = require('./routes/experience.route')
const blogsRouter = require('./routes/blogs.route')
const contactsRouter = require('./routes/contact.route')

// env.config();

const app = express()
const PORT = 5000

dbConnection()

app.use(cors())

app.use("/home", homeRouter)
app.use("/intro", introRouter)
app.use("/portfolio", portfolioRouter)
app.use("/experience", experienceRouter)
app.use("/blogs", blogsRouter)
app.use("/contact", contactsRouter)

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "portfolio v2 app"
    })
})

app.listen( PORT, () => console.log(`app service running`))

module.exports = app
