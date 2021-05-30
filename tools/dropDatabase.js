const mongoose = require('mongoose');
const config = require('../config');
console.log('kien');
mongoose
  .connect(config.DATABASE_URL, {
    dbName: config.DATABASE_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connect to Database sucessfully'))
  .catch((err) => {
    console.error('Database connects failed: ', err);
    process.exit(1);
  });

mongoose.connection
  .dropDatabase()
  .then(() => {
    console.log('drop database successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Database drops failed: ', err);
    process.exit(1);
  });
