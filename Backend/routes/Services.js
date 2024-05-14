import express from 'express';
import bcrypt from 'bcrypt';
import {User, Appointment, Service} from '../DB/Schemas.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';

config();

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const service = await Service.findOne({ status: 1 });

    res.status(200).json({
      message: "Servicios obtenidos con éxito",
      service:{
        name: service.name,
        desc: service.desc,
        price: service.price,
      },
    });

  } catch (error) {
    console.error("Error al realizar Traer los servicios:", error);
    res.status(500).json({ message: "Ocurrió un error al traer los servicios" });
  }
});

export default router;