import Service from "../base/service.class";
import * as crypto from "crypto";

class AuthService extends Service {

    public constructor () {

        super();
        this.login = this.login.bind(this);
        
    }

    public login ({email,password}): Promise<any> {
        
        return new Promise(async (resolve, reject): Promise<any> => {

            try {
                
                const hash = crypto.createHash('sha256');
                hash.update(password);
                const sha256pwd = hash.digest('hex');
                const query = `SELECT * FROM public.users WHERE email = $1 AND password = $2`;
                const raw_user = await this.executeQuery(query, [email, sha256pwd]);
            
                if (raw_user.length === 0) resolve({"user": null});
                else resolve({"user": raw_user.pop()});

            } catch (error) {
            
                reject(error);

            }

        });

    }

}

export default AuthService;