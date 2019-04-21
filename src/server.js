import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/v1', routes);
server.get('*', (req, res) => res.status(404).json({ message: 'Route does not exist' }));
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('listening on port', port);
});

export default server;
