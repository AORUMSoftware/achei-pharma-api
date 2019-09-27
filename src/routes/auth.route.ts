import {Router} from 'express';
import authController from '../controllers/auth.controller';
import authMiddleware from '../middlewares/auth.middleware';

// Registering Routes
const baseRoute = '/';
const router: Router = Router();
router.post(`${baseRoute}login`, authController.login);

// Test token route
router.get(`${baseRoute}test`, [authMiddleware.verifyToken, (req, res) => {
    res.status(200).send(req.user);
}]);

export default router;
