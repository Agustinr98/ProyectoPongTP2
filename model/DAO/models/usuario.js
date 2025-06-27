import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: String,
    password: String,
    provincia: String,
    puntajeMaximo: Number
}, { versionKey: false });

export const UsuarioModel = mongoose.model('usuarios', usuarioSchema);