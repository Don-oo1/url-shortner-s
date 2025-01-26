const mongoose = require('mongoose')

async function connectMongoDb(url){
    await mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
}

module.exports = {
    connectMongoDb,
}
