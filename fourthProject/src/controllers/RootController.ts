import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response): void {
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
  }
}
