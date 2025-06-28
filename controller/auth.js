import Servicio from '../service/auth.js';

class Controlador {
    #servicio;

    constructor() {
        this.#servicio = new Servicio();
    }

    login = async (req, res) => {
        try {
            const loginData = await this.#servicio.login(req.body);
            res.json(loginData);
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

    refresh = async (req, res) => {
        try {
            const refreshData = await this.#servicio.refresh(req.body.refreshToken);
            res.json(refreshData);
        } catch (error) {
            res.status(403).json({ error: error.message });
        }
    }
}

export default Controlador;