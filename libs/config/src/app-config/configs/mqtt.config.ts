export default () => ({
  mqtt: {
    url: process.env.MQTT_URL || 'mqtt://localhost:1883',
  },
});
