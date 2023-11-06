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

app.use(express.json());
app.use(cors())
dbConnection()


app.use("/home", homeRouter)
app.use("/intro", introRouter)
app.use("/portfolio", portfolioRouter)
app.use("/experience", experienceRouter)
app.use("/blogs", blogsRouter)
app.use("/contact", contactsRouter)

app.get("/", (req, res) => {
    res.send("apis for ecox-in ©Aditya Singh");
})

app.listen( PORT, () => console.log(`app service running`))

module.exports = app
