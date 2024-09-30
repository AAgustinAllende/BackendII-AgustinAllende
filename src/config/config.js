import dotenv from 'dotenv';

dotenv.config();

export const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_key';
export const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/mi_base_de_datos';
