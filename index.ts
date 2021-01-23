import express from 'express';

const PORT = 1234;

const app = express();

app.get('/', (_req, res) => res.send('Express + Typescript !!'));

app.listen(PORT, () => {
  console.log(`[server] Server is running at https://localhost:${PORT}`);
});
