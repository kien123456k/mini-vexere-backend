const config = require('../config');
const mongoose = require('mongoose');

const connect = async (postfix = '') => {
  try {
    const db = await mongoose.connect(`${config.DATABASE_URL}/${config.DATABASE_NAME}${postfix}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: 'admin',
    });
    console.log('Connected to database successfully');

    return db.connection;
  } catch (err) {
    console.log('Mongodb starting error: ', err);
  }
};

module.exports = {
  connect,
};
