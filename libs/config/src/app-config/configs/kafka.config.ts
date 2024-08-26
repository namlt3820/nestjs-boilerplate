export default () => ({
  kafka: {
    url: process.env.KAFKA_URL || 'localhost:9092',
  },
});
