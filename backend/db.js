const mongoose = require ("mongoose");
require('dotenv').config()

const MongoURI = process.env.DB_KEY;




const connectToMongo = async () => {
    try {
      await mongoose.connect(MongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Failed to connect to MongoDB Atlas', error);
    }
  };

module.exports = connectToMongo;