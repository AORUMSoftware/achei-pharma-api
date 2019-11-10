import Service from "../base/service.class";

class MainService extends Service {

    public constructor () {

        super();
        this.companies = this.companies.bind(this);
        this.products = this.products.bind(this);
        this.create_product = this.create_product.bind(this);
        this.update_product = this.update_product.bind(this);
        this.delete_product = this.delete_product.bind(this);
        this.get_product = this.get_product.bind(this);
        
    }

    public companies (company_id): Promise<any> {
        
        return new Promise(async (resolve, reject): Promise<any> => {

            try {

                if (company_id) {

                    const raw_data = await this.executeQuery("SELECT * FROM public.companies WHERE company_id = $1", [company_id]);
                    const data = raw_data.pop();
                    resolve(data);
    
                } else {

                    const raw_data = await this.executeQuery("SELECT * FROM public.companies");
                    resolve(raw_data);
    
                }
                
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

    public create_product (product): Promise<any> {

        return new Promise(async (resolve, reject): Promise<any> => {

            try {
                
                const {
                    company_id,
                    product_name,
                    product_description,
                    price,
                    photo
                } = product;

                const query = "INSERT INTO public.products (company_id,product_name,product_description,price,photo) VALUES ($1,$2,$3,$4,$5) returning product_id,company_id,product_name,product_description,price,photo;"
                const raw_product = await this.executeQuery(query, [company_id,product_name,product_description,price,photo])
                resolve(raw_product);

            } catch (error) {

                reject(error);
                throw error;

            }

        });

    }

    public update_product (product): Promise<any> {

        return new Promise(async (resolve, reject): Promise<any> => {

            try {
                
                const {
                    product_id,
                    company_id,
                    product_name,
                    product_description,
                    price,
                    photo
                } = product;

                const query = "update public.products set company_id=$1,product_name=$2,product_description=$3,price=$4,photo=$5 where product_id = $6 returning product_id,company_id,product_name,product_description,price,photo"
                const raw_product = await this.executeQuery(query, [company_id,product_name,product_description,price,photo,product_id])
                resolve(raw_product);

            } catch (error) {

                reject(error);
                throw error;

            }

        });
        
    }

    public delete_product (product_id): Promise<any> {

        return new Promise(async (resolve, reject): Promise<any> => {

            try {
                
                await this.executeQuery("DELETE FROM public.products WHERE product_id = $1", [product_id])
                resolve();

            } catch (error) {

                reject(error);
                throw error;

            }

        });
        
    }

    public get_product (product_id): Promise<any> {

        return new Promise(async (resolve, reject): Promise<any> => {

            try {
                
                const raw_data = await this.executeQuery("SELECT * FROM public.products WHERE product_id = $1", [product_id])
                const data = raw_data.pop();
                resolve(data);

            } catch (error) {

                reject(error);
                throw error;

            }

        });
        
    }

}

export default MainService;