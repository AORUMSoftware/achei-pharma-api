import Controller from '../base/controller.class';
import { Response } from 'express';
import MainService from '../services/main.service';

class MainController extends Controller {

    public constructor () {

        super();
        this.companies = this.companies.bind(this);
        this.products = this.products.bind(this);
        this.create_product = this.create_product.bind(this);
        this.update_product = this.update_product.bind(this);
        this.delete_product = this.delete_product.bind(this);
        this.get_product = this.get_product.bind(this);

    }

    public companies (req, res: Response): void {

        const {company_id} = req.params;
        const mainService = new MainService();
        mainService.companies(company_id)
            .then((results) => res.status(200).send(results))
            .catch((error) => res.status(400).send(this.error(error)));

    }

    public products (req, res: Response): void {

        const mainService = new MainService();
        mainService.products()
            .then((results) => res.status(200).send(results))
            .catch((error) => res.status(400).send(this.error(error)));

    }

    public create_product (req, res: Response): void {

        const {body} = req;
        const mainService = new MainService();
        mainService.create_product(body)
            .then((results) => res.status(201).send(results))
            .catch((error) => res.status(400).send(this.error(error)));

    }

    public update_product (req, res: Response): void {

        const {body} = req;
        const mainService = new MainService();
        mainService.update_product(body)
            .then((results) => res.status(200).send(results))
            .catch((error) => res.status(400).send(this.error(error)));

    }

    public delete_product (req, res: Response): void {

        const {product_id} = req.params;
        const mainService = new MainService();
        mainService.delete_product(product_id)
            .then((results) => res.status(204).send())
            .catch((error) => res.status(400).send(this.error(error)));

    }

    public get_product (req, res: Response): void {

        const {product_id} = req.params;
        const mainService = new MainService();
        mainService.get_product(product_id)
            .then((results) => res.status(200).send(results))
            .catch((error) => res.status(400).send(this.error(error)));

    }

}

export default new MainController();
