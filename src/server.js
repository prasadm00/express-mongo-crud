import app from './app';
import config from './config/config';

const PORT = config.PORT;

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on('error', (err) => {
    console.error(`Error while running the Server: ${err}`);
  });
