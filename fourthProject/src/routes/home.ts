import { Router, Response } from 'express';

import { RequestWithBody } from './../RequestWithBody';

const router = Router();

router.get('/', (req: RequestWithBody, res: Response): void => {
  if (req.session && !req.session.loggedIn) {
    res.send(`
      <div>
        <p>You are not logged in!</p>
        <a href="/login">Login</a>
      </div>
    `);
    return;
  }

  res.send(`
    <div>
      <p>You are logged in!</p>
      <a href="/logout">Logout</a>
    </div>
    `);
});

export { router };
