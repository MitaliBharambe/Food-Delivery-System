const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/GoFood';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected!');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

async function find() {
  try {
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error in find function:', error);
    throw error;
  }
}

module.exports = {
  connectToMongoDB,
  find
};
