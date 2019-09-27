import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import AuthMiddleware from './middlewares/auth.middleware';
import authRoute from './routes/auth.route';

//
const app = require('express')();
const customerBaseRoute = '/api/customer/';
const providerBaseRoute = '/api/provider/';

// Middlewares Setup
app.use(bodyParser.urlencoded({"extended": true}));
app.use(bodyParser.json());
app.use(morgan('short'));

// Registering base routes for providers
app.use(`${providerBaseRoute}auth`, [authRoute]);
// app.use(`${baseRoute}auth`, [AuthMiddleware.verifyToken, softwareRoute]);

// Registering base routes for customers
// app.use(`${providerBaseRoute}auth`, [authRoute]);

export default app;
