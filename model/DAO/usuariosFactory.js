// import ModelUsuarioMem from './usuariosMem.js';
// import ModelUsuarioFile from './usuariosFile.js';
// import ModelUsuarioMongo from './usuariosMongoDB.js';

// class ModelFactory {
//     static get(tipo) {
//         switch (tipo) {
//             case 'MEM':
//                 console.log("*** Persistencia en memoria ***");
//                 return new ModelUsuarioMem();
//             case 'FILE':
//                 console.log("*** Persistencia en Filesystem ***");
//                 return new ModelUsuarioFile();
//             case 'DB':
//                 console.log("*** Persistencia en MongoDB ***");
//                 return new ModelUsuarioMongo();
//             default:
//                 console.log("*** Persistencia en Filesystem (default) ***");
//                 return new ModelUsuarioFile();
//         }
//     }
// }

// export default ModelFactory