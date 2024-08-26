export default () => ({
  rabbitmq: {
    url: process.env.RABBITMQ_URL || 'amqp://user:password@localhost:5672',
  },
});
