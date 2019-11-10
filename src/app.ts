import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import AuthMiddleware from './middlewares/auth.middleware';
import authRoute from './routes/auth.route';
import mainRoute from './routes/main.route';

//
const app = require('express')();
const baseRoute = '/api/';

// Middlewares Setup
app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.json());
app.use(morgan('short'));

// Registering base routes
app.use(`${baseRoute}auth`, [authRoute]);
app.use(`${baseRoute}main`, [mainRoute]);

export default app;
