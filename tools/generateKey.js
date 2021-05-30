const crypto = require('crypto');

const JWT_ACCESS_SECRET_KEY = crypto.randomBytes(32).toString('base64');
const JWT_REFRESH_SECRET_KEY = crypto.randomBytes(32).toString('base64');

console.table({
  JWT_ACCESS_SECRET_KEY,
  JWT_REFRESH_SECRET_KEY,
});
