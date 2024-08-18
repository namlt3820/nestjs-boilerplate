export default () => ({
  jwt: {
    private_key: process.env.JWT_PRIVATE_KEY || '123456',
    public_key: process.env.JWT_PUBLIC_KEY || '123456',
  },
});
