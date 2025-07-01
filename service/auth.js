import ModelUsuarioMongo from '../model/DAO/usuariosMongoDB.js';
import { validarLogin, validarRefresh } from './validations/auth.js';
import jwt from 'jsonwebtoken';

class Servicio {
    #model;

    constructor() {
        this.#model = new ModelUsuarioMongo();
    }

    login = async ({ id, username, password }) => {
        const res = validarLogin({ username, password });
        if (!res.result) throw new Error(res.error.details[0].message);

        const usuario = await this.#model.obtenerUsuarioPorId(id);
        if (!usuario || usuario.password !== password || usuario.username !== username) {
            throw new Error('Credenciales inválidas');
        }

        const accessToken = await this.generarAccessToken(usuario);
        const refreshToken = await this.generarRefreshToken(usuario);
        return { accessToken, refreshToken, usuario: { id: usuario._id, username: usuario.username, email: usuario.email } };
    }

    refresh = async ({ id, username, password, refreshToken }) => {
        const res = validarRefresh({ refreshToken });
        if (!res.result) throw new Error(res.error.details[0].message);

        try {

            const usuario = await this.#model.obtenerUsuarioPorId(id);
            if (!usuario || usuario.password !== password || usuario.username !== username) {
                throw new Error('Credenciales inválidas');
            }

            const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            const accessToken = await this.generarAccessToken({ _id: payload.id, username: payload.username });
            return { accessToken, refreshToken, usuario: { id: usuario._id, username: usuario.username, email: usuario.email } };
        } catch {
            throw new Error('Refresh token inválido o expirado');
        }
    }

    generarAccessToken = async usuario => {
        const payload = { id: usuario._id, username: usuario.username };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '30m' });
        return token;
    }

    generarRefreshToken = async usuario => {
        const payload = { id: usuario._id, username: usuario.username };
        const token = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' });
        return token;
    }
}

export default Servicio;