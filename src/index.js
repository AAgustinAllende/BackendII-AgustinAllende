import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import sessionRoutes from './routes/sessions.js';
import JwtStrategy from 'passport-jwt';
import User from './models/User.js';
dotenv.config();  

const { Strategy, ExtractJwt } = JwtStrategy;


const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET  
};

passport.use(new Strategy(opts, async (jwt_payload, done) => {
  try {
    const user = await User.findById(jwt_payload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (err) {
    return done(err, false);
  }
}));

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use('/api/sessions', sessionRoutes);

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch((err) => console.error('Error conectando a la base de datos:', err));

app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
