import express from 'express';
import Controlador from "../controller/ubicacion.js"

class Router {
  #controlador

  constructor() {
    this.#controlador = new Controlador();
  }

  start() {
    const router = express.Router();

    router.post('/', this.#controlador.obtenerUbicacion);

    return router;
  }
}

export default Router;