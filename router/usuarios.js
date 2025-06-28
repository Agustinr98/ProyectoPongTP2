import express from 'express';
import Controlador from '../controller/usuarios.js';
import { autenticarJWT } from '../middleware/auth.js';

class Router {
    #controlador;

    constructor() {
        this.#controlador = new Controlador();
    }

    start() {
        const router = express.Router();

        router.get('/:id?', this.#controlador.obtenerUsuarios);
        router.post('/', this.#controlador.registrarUsuario);
        router.put('/:id', autenticarJWT, this.#controlador.actualizarUsuario);
        router.delete('/:id', autenticarJWT, this.#controlador.eliminarUsuario);

        return router
    }
}

export default Router