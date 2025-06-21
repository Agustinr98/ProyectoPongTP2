import ModelFactory from '../model/DAO/usuariosFactory.js';
import { validar } from './validations/usuarios.js';

class Servicio {
    #model;

    constructor(persistencia) {
        this.#model = ModelFactory.get(persistencia);
    }

    obtenerUsuario = async id => {
        if (id) {
            const usuario = await this.#model.obtenerUsuarioPorId(id);
            return usuario;
        } else {
            const usuarios = await this.#model.obtenerUsuarios();
            return usuarios;
        }
    }

    registrarUsuario = async usuario => {
        const res = validar(usuario);
        if (res.result) {
            const usuarioGuardado = await this.#model.guardarUsuario(usuario);
            return usuarioGuardado;
        } else {
            throw new Error(res.error.details[0].message);
        }
    }

    actualizarUsuario = async (id, usuario) => {
        const usuarioActualizado = await this.#model.actualizarUsuario(id, usuario);
        return usuarioActualizado;
    }

    eliminarUsuario = async id => {
        const usuarioEliminado = await this.#model.borrarUsuario(id);
        return usuarioEliminado;
    }

}

export default Servicio;