import ModelUsuarioMongo from '../model/DAO/usuariosMongoDB.js';
import NodeGeocoder from 'node-geocoder';
import { validar } from './validations/ubicacion.js';

class Servicio {
    #model;

    constructor() {
        this.#model = new ModelUsuarioMongo();
    }

    obtenerUbicacion = async (data) => {
        const res = validar(data);
        if (res.result) {
            const geocoder = NodeGeocoder({
                provider: 'google',
                apiKey: process.env.GOOGLE_API_KEY, // aca toma la clave de la credencial de la API de Google Maps
            });

            const [ubicacion] = await geocoder.reverse({ lat: data.latitude, lon: data.longitude }); // se usa el método reverse para obtener la ubicación a partir de las coordenadas

            const ciudad = ubicacion.city || 'Ciudad desconocida';
            const pais = ubicacion.country || 'País desconocido';

            return { ciudad, pais };
        } else {
            throw new Error(res.error.details[0].message);
        }
    }
}


export default Servicio;
