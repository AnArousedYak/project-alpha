import express from 'express';
import sequelize from './config/connection.js';
import AppRouter from '../server/routes/index.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', AppRouter);


const startServer = async () => {
  try {
    await sequelize.authenticate();

    console.log('Database connection established.');

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();