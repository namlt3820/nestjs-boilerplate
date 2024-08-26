export default () => ({
  nats: {
    url: process.env.NATS_URL || 'nats://localhost:4222',
  },
});
