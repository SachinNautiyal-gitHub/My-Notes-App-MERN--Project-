const mongoose = require ("mongoose");

const MongoURI = "mongodb+srv://nautiyalsachin217:tlPBYWKadq4NkcDO@cluster0.jlrmqd8.mongodb.net/";


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