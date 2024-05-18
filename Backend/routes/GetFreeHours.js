import express from 'express';
import bcrypt from 'bcrypt';
import {User, Appointment, Service} from '../DB/Schemas.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv';

config();

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const day = req.query.date;

    
    if(!!!day){
        return res.status(400).json({ error: 'Fields are required' });
      }

    const startOfDay = new Date(day);//día en formato '2024-05-15'

    const endOfDay = new Date(day);
    endOfDay.setDate(endOfDay.getDate() + 1);// Incrementa en 1 día para obtener el final del día siguiente

    const reservedHours = await Appointment.find({
        date: {
          $gte: startOfDay,
          $lt: endOfDay
        }
    });

    let availableHours = [];
    for (let i = 8; i < 18; i++) { // Horas disponibles de 8 a 17
        if (i != 13)
          availableHours.push(i);
        

        
    }

    //se modifica el array con las horas disponbiles
    reservedHours.forEach(reservedHours => {
        const hour = reservedHours.date.getUTCHours();
        const index = availableHours.indexOf(hour);
        if (index !== -1) {
          availableHours.splice(index, 1); // Remueve la hora ocupada del array de horas disponibles
        }
      });

    res.status(200).json({
      message: "Horas obtenidas con éxito",
      availableHours,
    });

  } catch (error) {
    console.error("Error al realizar Traer los servicios:", error);
    res.status(500).json({ message: "Ocurrió un error al traer los servicios" });
  }
});

export default router;