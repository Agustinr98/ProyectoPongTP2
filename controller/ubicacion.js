import Servicio from "../service/ubicacion.js";

class Controlador {
    #servicio;

    constructor() {
        this.#servicio = new Servicio();
    }

    obtenerUbicacion = async (req, res) => {
        try {
            if (!req.body.latitude || !req.body.longitude) {
                return res.status(400).json({ error: 'Faltan coordenadas' });
            }

            const ubicacion = await this.#servicio.obtenerUbicacion(req.body);
            res.json(ubicacion);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

export default Controlador;