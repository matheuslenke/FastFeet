import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import OrderController from './app/controllers/OrderController';
import DeliverymanOrdersController from './app/controllers/DeliverymanOrdersController';
import FinishDeliveryController from './app/controllers/FinishDeliveryController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Deliveryman Orders routes
routes.get(
  '/deliveryman/:deliveryman_id/deliveries',
  DeliverymanOrdersController.index
);
routes.put(
  '/deliveryman/:deliveryman_id/deliveries/:order_id',
  DeliverymanOrdersController.update
);
routes.put(
  '/deliveryman/:deliveryman_id/deliveries/:order_id/finish',
  FinishDeliveryController.update
);

// Delivery Problems routes
routes.get('/delivery/:delivery_id/problems', DeliveryProblemController.index);
routes.post('/delivery/:delivery_id/problems', DeliveryProblemController.store);
routes.delete(
  '/problem/:problem_id/cancel-delivery',
  DeliveryProblemController.delete
);

// Middleware de autenticação. A partir daqui, todas as rotas precisam de
// autenticação.
routes.use(authMiddleware);

// Recipients Routes
routes.post('/recipients', RecipientController.store);
routes.get('/recipients', RecipientController.index);
routes.put('/recipients/:id', RecipientController.update);

routes.post('/files', upload.single('file'), FileController.store);

// Deliveryman Routes
routes.post('/deliverymans', DeliverymanController.store);
routes.get('/deliverymans', DeliverymanController.index);
routes.put('/deliverymans', DeliverymanController.update);
routes.delete('/deliverymans/:id', DeliverymanController.delete);

// Order Routes
routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);

module.exports = routes;
