import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('/logout')
class LogoutController {
  @get('/')
  getLogout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect('/');
  }
}
