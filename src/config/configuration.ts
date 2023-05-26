export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  environment: process.env.NODE_ENV || 'development',
  encode: process.env.APP_ENC,
  db: {
    mongodb_uri: process.env.MONGODB_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiry: process.env.JWT_EXPIRY,
    tokentype: process.env.JWT_TOKEN_TYPE,
  },
});
