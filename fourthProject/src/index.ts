import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter';

import './controllers/LoginController';
import './controllers/LogoutController';
import './controllers/RootController';
import './controllers/ProtectedRouteController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['session'] }));
app.use(AppRouter.instance);

app.listen(3000, () => console.log('Listening on port 3000'));
