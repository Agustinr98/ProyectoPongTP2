import express from 'express';
import Controlador from '../controller/usuarios.js';

class Router {
    #controlador;

    constructor(persistencia) {
        this.#controlador = new Controlador(persistencia);
    }

    start() {
        const router = express.Router();

        router.get('/:id?', this.#controlador.obtenerUsuarios);
        router.post('/', this.#controlador.registrarUsuario);
        router.put('/:id', this.#controlador.actualizarUsuario);
        router.delete('/:id', this.#controlador.eliminarUsuario);

        return router
    }
}

export default Router