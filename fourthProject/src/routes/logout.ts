import { Router, Response } from 'express';

import { RequestWithBody } from './../RequestWithBody';

const router = Router();

router.get('/', (req: RequestWithBody, res: Response): void => {
  req.session = undefined;
  res.redirect('/');
});

export { router };
