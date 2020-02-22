import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const { Router } = require('express');

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Middleware de autenticação. A partir daqui, todas as rotas precisam de
// autenticação.
routes.use(authMiddleware);

module.exports = routes;
