import { Router, Response } from 'express';

import { RequestWithBody } from './../RequestWithBody';
import { requireAuth } from '../middlewares/requireAuth';

const router = Router();

router.get('/', requireAuth, (req: RequestWithBody, res: Response): void => {
  res.send(`
      <div>
        <p>Protected route!</p>
      </div>
    `);
});

export { router };
