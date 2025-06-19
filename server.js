import express from 'express';
import RouterUsuarios from './router/usuarios.js';
import CnxMongoDB from './model/DBMongo.js';
import cors from 'cors';

class Server {
    #port
    #persistencia
    #server

    constructor(port, persistencia) {
        this.#port = port;
        this.#persistencia = persistencia;
        this.#server = null;
    }

    async start() {
        // ---------------------
        //      Express App
        // ---------------------
        const app = express();

        // ---------------------
        //       Middleware
        // ---------------------
        app.use(cors());
        app.use(express.json());

        // ---------------------
        //        Routing
        // ---------------------
        app.use('/api/usuarios', new RouterUsuarios(this.#persistencia).start());

        // ----------------------------------------
        //        Conectar a la base de datos
        // ----------------------------------------
        if (this.#persistencia === 'DB') {
            await CnxMongoDB.conectar();
        }

        // ---------------------
        //        Listener
        // ---------------------
        const PORT = this.#port;
        const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`));
        server.on('error', error => console.log(`Error en servidor: ${error.message}`));
    }

    async stop() {
        if (this.#server) {
            this.#server.close();
            await CnxMongoDB.desconectar();
            this.#server = null;
        }
    }
}

export default Server;