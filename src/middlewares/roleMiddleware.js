export const roleMiddleware = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'No puedes ingresar' });
      }
      next();
    };
  };
  