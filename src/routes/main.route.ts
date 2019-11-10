import {Router} from 'express';
import mainController from '../controllers/main.controller';
import authMiddleware from '../middlewares/auth.middleware';

// Registering Routes
const baseRoute = '/';
const router: Router = Router();
router.get(`${baseRoute}companies`, mainController.companies);
router.get(`${baseRoute}companies/:company_id`, mainController.companies);
router.get(`${baseRoute}products`, mainController.products);
router.post(`${baseRoute}products`, mainController.create_product);
router.put(`${baseRoute}products`, mainController.update_product);
router.delete(`${baseRoute}products/:product_id`, mainController.delete_product);
router.get(`${baseRoute}products/:product_id`, mainController.get_product);

export default router;
