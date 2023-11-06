// const env = require('dotenv')
const mongoose = require('mongoose')

// env.config();

// const password = 'aditya1997'
const dbName = "portfolio_v2"


const connectionStr = `mongodb+srv://MongoDbUser:aditya1997@neog-cluster.d8w2z.mongodb.net/${dbName}?retryWrites=true&w=majority`
const dbConnection = async () => {
  try {

    const response = await mongoose.connect(connectionStr)

    console.log("connection successful")

  } catch (error) {
    console.log('database error -->', error)
  }
}

module.exports = { dbConnection }

module.exports = { dbConnection }
