import { Router, Response } from 'express';

import { RequestWithBody } from '../RequestWithBody';

const router = Router();

router.get('/', (req: RequestWithBody, res: Response): void => {
  res.send(`
    <form method="POST">
      <div>
        <label>
          Email
          <input name="email" type="text"/>
        </label>
        <label>
          Password
          <input name="password" type="password"/>
        </label>
        <button>Submit</button>
      </div>
    </form>
  `);
});

router.post('/', (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send('You must provide email and password!');
    return;
  }

  if (email !== 'hi@hi.com' || password !== 'password') {
    res.send('Wrong email or password!');
    return;
  }

  req.session = { loggedIn: true };
  res.redirect('/');
});

export { router };
