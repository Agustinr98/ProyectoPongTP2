import express from 'express';
import Controlador from '../controller/auth.js';

class Router {
    #controlador;

    constructor() {
        this.#controlador = new Controlador();
    }

    start() {
        const router = express.Router();

        router.post('/login', this.#controlador.login);
        router.post('/refresh', this.#controlador.refresh);

        return router;
    }

}

export default Router;