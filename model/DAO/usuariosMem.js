import fs from 'fs';

class ModelUsuarioMem {
    #usuarios;

    constructor() {
        this.#usuarios = [
            { id: 1, username: 'luis', nombre: 'Luis', apellido: 'Acosta', email: 'luis@test.com', password: '123', puntajeMaximo: 1 },
            { id: 2, username: 'admin', nombre: 'Administrador', apellido: 'Uno', email: 'admin@test.com', password: '123', puntajeMaximo: 1 },
        ];
    }

    obtenerUsuarios = async () => this.#usuarios;

    obtenerUsuarioPorId = async id => {
        const usuario = this.#usuarios.find(u => u.id === id);
        return usuario || {};
    }

    guardarUsuario = async usuario => {
        usuario.id = this.#usuarios.length + 1; // Asignar un nuevo ID
        this.#usuarios.push(usuario);
        return usuario;
    }

    actualizarUsuario = async (id, usuario) => {
        const index = this.#usuarios.findIndex(u => u.id === id);
        if (index != -1) {
            const usuarioAnterior = this.#usuarios[index];
            const usuarioActual = { ...usuarioAnterior, ...usuario };
            this.#usuarios.splice(index, 1, usuarioActual);
            return usuarioActual;
        } else {
            return null;
        }
    }

    eliminarUsuario = async id => {
        const index = this.#usuarios.findIndex(u => u.id === id);
        if (index != -1) {
            const usuarioEliminado = this.#usuarios.splice(index, 1)[0];
            return usuarioEliminado;
        } else {
            return null;
        }
    }
}

export default ModelUsuarioMem;