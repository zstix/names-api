import express from 'express';

import nameConroller from './names/names.controller';

const port = 1337;
const app = express();

// TODO: pagination
app.get('/names', nameConroller.getAll);

app.listen(port, () => {
  console.log(`[server] Server is running at https://localhost:${port}`);
});
