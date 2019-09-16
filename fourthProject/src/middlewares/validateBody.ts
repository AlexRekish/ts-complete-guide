import { RequestHandler, Request, Response, NextFunction } from 'express';

export function validateBody(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request!');
      return;
    }

    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Invalid request! ${key} is required!`);
        return;
      }
    }

    next();
  };
}
