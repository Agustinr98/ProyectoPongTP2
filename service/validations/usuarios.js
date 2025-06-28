import Joi from 'joi';

export const validar = usuario => {
    const usuarioSchema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(50).required(),
        provincia: Joi.string().min(1).max(35).optional(),
        puntajeMaximo: Joi.number().integer().min(0).max(999999).optional()
    });

    const { error } = usuarioSchema.validate(usuario);
    if (error) {
        return { result: false, error }
    }

    return { result: true }
}