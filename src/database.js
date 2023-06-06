const mongoose = require('mongoose');
const {MONGODB_URI} = require('./config');

(async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('MongoDB Conectado:', mongoose.connection.name);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  }
})();





