import app from './app.js';
import config from './config/config.js';
import connectDB from './database/connect-db.js';

const PORT = config.server.port;

await connectDB()

app
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
  .on('error', (err) => {
    console.error(`Error while running the Server: ${err}`);
  });
