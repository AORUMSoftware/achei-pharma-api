import Controller from '../base/controller.class';
import { Response } from 'express';
import MainService from '../services/main.service';

class MainController extends Controller {

    public constructor () {

        super();
        this.companies = this.companies.bind(this);
        this.products = this.products.bind(this);

    }

    public companies (req, res: Response): void {

        const mainService = new MainService();
        mainService.companies()
            .then((results) => res.status(200).send(results))
            .catch((error) => res.status(400).send(this.error(error)));

    }

    public products (req, res: Response): void {

        const mainService = new MainService();
        mainService.products()
            .then((results) => res.status(200).send(results))
            .catch((error) => res.status(400).send(this.error(error)));

    }

}

export default new MainController();
