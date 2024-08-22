import * as dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    use_env_variable: 'POSTGRES_URI',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'POSTGRES_URI',
    dialect: 'postgres',
  },
};
