import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI);

// Verificar la conexión
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conexión establecida con la base de datos');
});

export default mongoose;