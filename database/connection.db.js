const env = require('dotenv')
const mongoose = require('mongoose')

// env.config();

const password = 'aditya1997'
const DbName = "portfolio_v2"


const connectionStr = `mongodb+srv://MongoDbUser:${password}@neog-cluster.d8w2z.mongodb.net/${DbName}?retryWrites=true&w=majority`
const dbConnection = async () => {
    try {

        const response = await mongoose.connect(connectionStr)

        console.log("connection successful")

    } catch (error) {
        console.log('database error -->', error)
    }
}

module.exports = { dbConnection }
