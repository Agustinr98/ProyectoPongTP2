import jwt from 'jsonwebtoken';

export const autenticarJWT = (req, res, next) => {
    const header = req.headers['authorization'];
    if (!header || !header.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Token requerido' });
    }

    const token = header.split(' ')[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: payload.id, username: payload.username };
        next();
    } catch {
        return res.status(401).json({ error: 'Token inválido o expirado' });
    }
}
