import { apiToken } from './../config/constants';
import Controller from '../base/controller.class';
import { Response } from 'express';
import AuthService from '../services/auth.service';
import * as jwt from 'jsonwebtoken';

class AuthController extends Controller {

    public constructor () {

        super();
        this.login = this.login.bind(this);

    }

    public login (req, res: Response): void {

        const {email,password} = req.body;
        const authService = new AuthService();
        authService.login({email,password})
            .then((user) => {

                const access_token = jwt.sign(user, apiToken, {
                    expiresIn: 3000 // in seconds
                });

                res.status(200).send({ auth: true, access_token, "current_time": new Date() });
            
            })
            .catch((error) => res.status(400).send(this.error(error)));

    }

}

export default new AuthController();
