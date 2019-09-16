import express from 'express';

export class AppRouter {
  private static routerInstance: express.Router;

  static get instance(): express.Router {
    if (!this.routerInstance) {
      AppRouter.routerInstance = express.Router();
    }

    return AppRouter.routerInstance;
  }
}
