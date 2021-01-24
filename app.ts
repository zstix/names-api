import express from 'express';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { NameController } from './src/name/name.controller';

dotenv.config();

const port = 1337;
const app = express();

createConnection().then((_conn) => {
  console.log('[server] Connected to database');

  const names = new NameController();
  app.get('/names', names.getAll); // TODO: pagination
  app.get('/names/:id', names.getOne);

  app.listen(port, () => {
    console.log(`[server] Server is running at https://localhost:${port}`);
  });
}).catch((error) => {
  console.log('[!][server] Unable to connect to the database');
  console.log(error);
});
