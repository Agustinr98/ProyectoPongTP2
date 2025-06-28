// import fs from 'fs';

// class ModelUsuarioFile {
//     #nombreArchivo;

//     constructor() {
//         this.#nombreArchivo = 'usuarios.json';
//     }

//     #leerArchivo = async nombre => {
//         let usuarios = [];
//         try {
//             usuarios = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'));
//         } catch { }

//         return usuarios;
//     }

//     #escribirArchivo = async (nombre, usuarios) => {
//         await fs.promises.writeFile(nombre, JSON.stringify(usuarios, null, '\t'));
//     }

//     obtenerUsuarios = async () => {
//         return await this.#leerArchivo(this.#nombreArchivo);
//     }

//     obtenerUsuario = async id => {
//         const usuarios = await this.#leerArchivo(this.#nombreArchivo);
//         const usuario = usuarios.find(u => u.id === id);
//         return usuario || {};
//     }

//     guardarUsuario = async usuario => {
//         const usuarios = await this.#leerArchivo(this.#nombreArchivo);
//         usuario.id = usuarios.length ? usuarios[usuarios.length - 1].id + 1 : 1; // Asignar un nuevo ID
//         usuarios.push(usuario);
//         await this.#escribirArchivo(this.#nombreArchivo, usuarios);
//         return usuario;
//     }

//     actualizarUsuario = async (id, usuario) => {
//         const usuarios = await this.#leerArchivo(this.#nombreArchivo);
//         const index = usuarios.findIndex(u => u.id === id);
//         if (index !== -1) {
//             const usuarioAnterior = usuarios[index];
//             const usuarioActual = { ...usuarioAnterior, ...usuario };
//             usuarios.splice(index, 1, usuarioActual);
//             await this.#escribirArchivo(this.#nombreArchivo, usuarios);
//             return usuarioActual;
//         } else {
//             return null;
//         }
//     }

//     borrarUsuario = async id => {
//         const usuarios = await this.#leerArchivo(this.#nombreArchivo);
//         const index = usuarios.findIndex(u => u.id === id);
//         if (index !== -1) {
//             const usuarioEliminado = usuarios.splice(index, 1)[0];
//             await this.#escribirArchivo(this.#nombreArchivo, usuarios);
//             return usuarioEliminado;
//         } else {
//             return null;
//         }

//     }
// }

// export default ModelUsuarioFile;