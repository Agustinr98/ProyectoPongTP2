import Servicio from '../service/usuarios.js';

class Controlador {
    #servicio;

    constructor(persistencia) {
        this.#servicio = new Servicio(persistencia);
    }

    obtenerUsuarios = async (req, res) => {
        try {
            const { id } = req.params;
            const usuarios = await this.#servicio.obtenerUsuario(id);
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    registrarUsuario = async (req, res) => {
        try {
            const usuario = req.body;
            if (!Object.keys(usuario).length) {
                throw new Error('El cuerpo de la solicitud no puede estar vacío');
            }

            const usuarioGuardado = await this.#servicio.registrarUsuario(usuario);
            res.json(usuarioGuardado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    actualizarUsuario = async (req, res) => {
        const { id } = req.params;
        const usuario = req.body;
        const usuarioActualizado = await this.#servicio.actualizarUsuario(id, usuario);
        res.json(usuarioActualizado);
    }

    eliminarUsuario = async (req, res) => {
        const { id } = req.params;
        const usuarioEliminado = await this.#servicio.eliminarUsuario(id);
        res.json(usuarioEliminado);
    }
}

export default Controlador;