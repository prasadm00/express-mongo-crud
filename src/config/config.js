import dotenv from 'dotenv';

dotenv.config();

const getEnvVariable = (key, defaultValue = undefined) => {
  const value = process.env[key];
  if (!value && defaultValue === undefined) {
    throw new Error(`Environment variable missing: ${key}`);
  }
  return value || defaultValue;
};

const config = {
  database: {
    // user: getEnvVariable('POSTGRES_USERNAME'),
    // password: getEnvVariable('POSTGRES_PASSWORD'),
    // host: getEnvVariable('POSTGRES_HOST'),
    // port: parseInt(getEnvVariable('POSTGRES_PORT'), 10),
    // name: getEnvVariable('POSTGRES_DATABASE'),
    mongoURL: getEnvVariable('MONGO_URI'),
  },
  server: {
    port: parseInt(getEnvVariable('PORT', 3000), 10),
  },
};

export default config;
