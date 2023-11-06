const express = require('express')
const cors = require('cors')
// const env = require('dotenv')
const { dbConnection } = require('../database/connection.db')
const homeRouter = require('../routes/home.route')
const introRouter = require('../routes/intro.route')
const portfolioRouter = require('../routes/portfolio.route')
const experienceRouter = require('../routes/experience.route')
const blogsRouter = require('../routes/blogs.route')
const contactsRouter = require('../routes/contact.route')

const serverless = require('serverless-http')

// env.config();

const app = express()
const PORT = 5000

module.exports.handler = serverless(app)

app.use(express.json());
app.use(cors())
dbConnection()


app.use("/.netlify/functions/api/home", homeRouter)
app.use("/.netlify/functions/api/intro", introRouter)
app.use("/.netlify/functions/api/portfolio", portfolioRouter)
app.use("/.netlify/functions/api/experience", experienceRouter)
app.use("/.netlify/functions/api/blogs", blogsRouter)
app.use("/.netlify/functions/api/contact", contactsRouter)


app.listen(PORT, () => console.log(`app service running`))

