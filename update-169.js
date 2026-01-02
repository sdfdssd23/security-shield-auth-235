const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validKey = process.env.SHIELD_AUTH_SECRET || 'shield-dev-235-key';

  if (!apiKey || apiKey !== validKey) {
    return res.status(401).json({
      status: 'error',
      message: 'Unauthorized: Invalid or missing security token'
    });
  }

  next();
};

module.exports = validateApiKey;