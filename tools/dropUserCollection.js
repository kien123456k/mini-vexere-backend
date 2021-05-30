const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017', {
    dbName: 'coach_booking_system',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connect to Database sucessfully'))
  .catch((err) => {
    console.error('Database connects failed: ', err);
    process.exit(1);
  });

mongoose.connection
  .dropCollection('User')
  .then(() => {
    console.log('Drop User collection successfully');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Collection drops failed: ', err);
    process.exit(1);
  });
