import { apiToken } from './../config/constants';
import * as jwt from 'jsonwebtoken';
import Middleware from '../base/middleware.class';

import {Response,NextFunction} from 'express';

class AuthMiddleware extends Middleware {

    public constructor () {

        super();
        this.verifyToken = this.verifyToken.bind(this);
        
    }
 
    public verifyToken (req, res: Response, next: NextFunction): void {
        
        const API_TOKEN = apiToken;
        const bearerHeader = req.headers.authorization;
        if (typeof bearerHeader !== 'undefined') {

            const bearer = bearerHeader.split(' ');
            const [,bearerToken] = bearer;

            jwt.verify(bearerToken, API_TOKEN, ((err, decoded): void => {

                if (err) {
                    
                    res.status(403).send(this.error("Unauthorized access"));
                    return;

                }

                req.user = decoded.user;
                next();

            }));

        } else {

            res.status(403).send(this.error("Unauthorized access"));

        }
      
    }

}

export default new AuthMiddleware();