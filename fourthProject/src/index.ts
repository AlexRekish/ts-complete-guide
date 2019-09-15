import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router as login } from './routes/login';
import { router as logout } from './routes/logout';
import { router as home } from './routes/home';
import { router as protectedRoute } from './routes/protected';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['session'] }));
app.use('/login', login);
app.use('/logout', logout);
app.use('/protected', protectedRoute);
app.use('/', home);

app.listen(3000, () => console.log('Listening on port 3000'));
