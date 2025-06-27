import Joi from 'joi';

export const validarLogin = (req, res, next) => {
    const loginSchema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(8).max(50).required(),
        email: Joi.string().email().required()
    });

    const { error } = loginSchema.validate(req.body);
    if (error) {
        return { result: false, error }
    }

    return { result: true }
}

export const validarRefresh = (req, res, next) => {
    const refreshSchema = Joi.object({
        refreshToken: Joi.string().required()
    });

    const { error } = refreshSchema.validate(req.body);
    if (error) {
        return { result: false, error }
    }

    return { result: true }
}
