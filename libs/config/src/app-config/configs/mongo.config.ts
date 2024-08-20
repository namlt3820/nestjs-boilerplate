export default () => ({
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
    dbName: process.env.DATABASE_NAME || 'test',
  },
});
