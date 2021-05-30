const bearerTokenParser = (req) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.split(' ').length) throw new Unauthorized('Unauthorized');
  return authHeader.split(' ')[1];
};

module.exports = bearerTokenParser;
