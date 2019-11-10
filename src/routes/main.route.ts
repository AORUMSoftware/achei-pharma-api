import {Router} from 'express';
import mainController from '../controllers/main.controller';
import authMiddleware from '../middlewares/auth.middleware';

// Registering Routes
const baseRoute = '/';
const router: Router = Router();
router.get(`${baseRoute}companies`, mainController.companies);
router.get(`${baseRoute}products`, mainController.products);

export default router;
