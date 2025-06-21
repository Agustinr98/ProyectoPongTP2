import config from '../config.js';
import mongoose from 'mongoose';

class CnxMongoDB {
    static connectionOK = false;

    static conectar = async _ => {
        try {
            console.log("Conectando a la base de datos (mongoose)...");
            await mongoose.connect(config.STRCNX + '/' + config.BASE);
            console.log("Conexión a la base de datos establecida correctamente.");
            
            CnxMongoDB.connectionOK = true;
        } catch (error) {
            console.error(`Error al conectar a la base de datos: ${error.message}`);
        }
    }

    static desconectar = async _ => {
        if (!CnxMongoDB.connectionOK) {
            return;
        }

        await mongoose.connection.close();
        CnxMongoDB.connectionOK = false;
    }
}

export default CnxMongoDB;