import passport from 'passport';

export const isUser = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ message: 'No autorizado' });
        }
        req.user = user; // Guarda el usuario en la solicitud
        next(); // Llama al siguiente middleware o ruta
    })(req, res, next);
};
