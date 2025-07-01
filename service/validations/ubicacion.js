import Joi from 'joi';

export const validar = ubicacion => {
    const ubicacionSchema = Joi.object({
        latitude: Joi.number().required(),
        longitude: Joi.number().required()
    });

    const { error } = ubicacionSchema.validate(ubicacion);
    if (error) {
        return { result: false, error }
    }

    return { result: true }
}