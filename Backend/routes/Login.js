import express from 'express';
import bcrypt from 'bcrypt';
import {User, Appointment} from '../DB/Schemas.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';

config();

const router = express.Router();

router.post("/", async (req, res) => {
  
  const {email, password} = req.body;

  if(!!!email || !!!password){
    return res.status(400).json({ error: 'Fields are required' });
  }
  
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Aquí puedes generar y devolver un token JWT si necesitas autenticación
    
    const tokenPayload ={
        _id: user.email,
        name: user.name,

    }

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET_KEY,{
      expiresIn: '90d',
    });

    res.status(200).json({
      message: "Login exitoso",
      token,
      user:{
        _id: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Error al realizar login:", error);
    res.status(500).json({ message: "Ocurrió un error al realizar login" });
  }
});

export default router;