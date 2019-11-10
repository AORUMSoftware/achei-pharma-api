import Service from "../base/service.class";

class MainService extends Service {

    public constructor () {

        super();
        this.companies = this.companies.bind(this);
        this.products = this.products.bind(this);
        
    }

    public companies (): Promise<any> {
        
        return new Promise(async (resolve, reject): Promise<any> => {

            try {
                
                const raw_data = await this.executeQuery("SELECT * FROM public.companies")
                resolve(raw_data);

            } catch (error) {

                reject(error);
                throw error;

            }

        });

    }

    public products (): Promise<any> {
        
        return new Promise(async (resolve, reject): Promise<any> => {

            try {
                
                const raw_data = await this.executeQuery("SELECT * FROM public.products")
                resolve(raw_data);

            } catch (error) {

                reject(error);
                throw error;

            }

        });

    }

}

export default MainService;