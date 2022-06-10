/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { sharedCode } from '@getting-started-with-nx/shared-code';
import * as express from 'express';

const app = express();

app.get('/api', (req, res) => {
  const name = req.query.my_name_is;
  // New:
  res.header('x-shared-code', sharedCode());
  res.send({ message: `Hello ${name}, Welcome to backend!` });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
