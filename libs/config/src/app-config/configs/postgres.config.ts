export default () => ({
  postgres: {
    uri:
      process.env.POSTGRES_URI ||
      'postgres://postgres:postgres@localhost:5432/default',
  },
});
