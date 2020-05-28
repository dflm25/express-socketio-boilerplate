import express from 'express';
import config from './config';
import cors  from 'cors';
import http from 'http';
import SocketIO from 'socket.io';
import compression from 'compression'

import { authMiddleware, handleErrors, staticFolder } from './app/http/middleware';
import ioListen from './app/socket/listen';
import ioEmit from './app/socket/emit';
import routes from './routes';
import mongo from './config/mongo';
import mysql from './config/mysql';

// use port from env or 3000 if it doesn't exist. feel free to change
const port = config.APP_PORT || 4000
const app = express()

app.use(compression());

app.use('*', cors({ origin: [
    'http://localhost:3000',
    'http://localhost:4000',
]}))

// connect to database
mongo(app);
mysql['crm'].authenticate().then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// load auth middlaware
staticFolder(app);
authMiddleware(app);
handleErrors(app);

// load all routes
routes(app)

const server = http.Server(app);
export const io = new SocketIO(server);

// start socket.io server
ioListen(io);
ioEmit(io);

// inserts io to each route/to the app params
// const { io } = req.app
app.io = io

server.listen(port,
  () => console.log(`App listening on port ${port}`)
)