import express from 'express';
import bcrypt from 'bcrypt';
import {User, Appointment, Service} from '../DB/Schemas.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';

config();

const router = express.Router();

router.get("/", async (req, res) => {
  try {

    const {userId} = req.query;
    console.log(userId);
    
    if (userId != "NO")
    {
      const appointments = await Appointment.find({ user: userId });
      res.status(200).json({
        message: "Citas obtenidas con éxito",
        Appointment: appointments
      });
      console.log("citas exito");
      console.log(appointments);
    }
    else
    {
      const appointments = await Appointment.find();
      res.status(200).json({
        message: "Citas obtenidas con éxito",
        Appointment: appointments
      });
      console.log("citas exito NO");
      console.log(appointments);
    }
    
    
  } catch (error) {
    console.error("Error al realizar Traer las citas:", error);
    res.status(500).json({ message: "Ocurrió un error al traer las citas" });
  }
});

export default router;