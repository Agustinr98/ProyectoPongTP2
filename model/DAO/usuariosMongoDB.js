import CnxMongoDB from "../DBMongo.js";
import { UsuarioModel } from "./models/usuario.js";

class ModelUsuarioMongo {
    constructor() { }

    obtenerUsuarios = async () => {
        if (!CnxMongoDB.connectionOK) throw new Error("No hay conexión a la base de datos");
        const usuarios = await UsuarioModel.find();
        return usuarios;
    }

    obtenerUsuarioPorId = async id => {
        if (!CnxMongoDB.connectionOK) throw new Error("No hay conexión a la base de datos");
        const usuario = await UsuarioModel.findOne({_id: id });
        return usuario;
    }

    obtenerUsuarioPorUsername = async username => {
        if (!CnxMongoDB.connectionOK) throw new Error("No hay conexión a la base de datos");
        const usuario = await UsuarioModel.findOne({username: username });
        console.log(usuario);
        return usuario;
    }

    guardarUsuario = async usuario => {
        if (!CnxMongoDB.connectionOK) throw new Error("No hay conexión a la base de datos");
        const usuarioModel = new UsuarioModel(usuario);
        const usuarioGuardado = await usuarioModel.save();
        return usuarioGuardado;
    }

    actualizarUsuario = async (id, usuario) => {
        if (!CnxMongoDB.connectionOK) throw new Error("No hay conexión a la base de datos");
        await UsuarioModel.updateOne({ _id: id}, { $set: usuario });
        const usuarioActualizado = await UsuarioModel.findOne({ _id: id });
        return usuarioActualizado;
    }

    borrarUsuario = async id => {
        if (!CnxMongoDB.connectionOK) throw new Error("No hay conexión a la base de datos");
        const usuarioEliminado = await this.obtenerUsuarioPorId(id);
        await UsuarioModel.deleteOne({ _id: id });
        return usuarioEliminado;
    }
}

export default ModelUsuarioMongo
