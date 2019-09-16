import { Request, Response, NextFunction } from 'express';
import { get, controller, post, bodyValidator } from './decorators';

@controller('/login')
class LoginController {
  @get('/')
  getLogin(req: Request, res: Response): void {
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
  }

  @post('/')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email !== 'hi@hi.com' || password !== 'password') {
      res.send('Wrong email or password!');
      return;
    }

    req.session = { loggedIn: true };
    res.redirect('/');
  }
}
