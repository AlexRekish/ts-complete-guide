import { Request, Response } from 'express';
import { get, controller, use } from './decorators';
import { requireAuth } from '../middlewares';

@controller('/protected')
class ProtectedRouteController {
  @get('/')
  @use(requireAuth)
  getRoot(req: Request, res: Response): void {
    res.send(`
      <div>
        <p>Protected route!</p>
      </div>
    `);
  }
}
