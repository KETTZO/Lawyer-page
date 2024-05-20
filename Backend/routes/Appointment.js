import express from 'express';
import {checkUser} from '../verifyInfo/checkUser.js';
import bcrypt from 'bcrypt';
import {User, Appointment} from '../DB/Schemas.js'

const router = express.Router();

router.post("/", async (req, res) => {
  
  const {user, date, hour, service} = req.body;
  const today = new Date();
  const ParsedDate = new Date(date + 'T00:00:00-05:00');

  console.log(user, date, hour, service);
  //1
  if(!!!user || !!!date || !!!service || !!!hour){
    console.log("error1");
    return res.status(400).json({ error: 'Fields are required' });
    
  }
  //2
  if (ParsedDate <= today) {
    console.log("error2");
    return res.status(400).json({ error: 'La fecha debe ser al menos un día después del día actual' });
    
  }
  //3
  if (!isWorkingDay(ParsedDate)) {
    console.log(ParsedDate);
    return res.status(400).json({ error: 'No es un día laboral' });
    
  }
  //4
  // Verificar que la hora tenga minutos en ceros (ej. 5:00, 12:00, 15:00)
  const [onlyHour, minute] = hour.split(':');
  if (parseInt(minute) !== 0) {
    console.log("error4");
    return res.status(400).json({ error: 'La hora debe tener minutos en ceros' });
    
  }

  //5
  // Verificar que la hora esté entre las 8 y las 17
  const parsedHour = parseInt(hour);
  if (parsedHour < 8 || parsedHour > 17) {
    console.log("error5");
    return res.status(400).json({ error: 'La hora debe estar entre las 10:00 y las 17:00' });
    
  }
  
  try {

    const fullDate = `${date}T${hour}:00.000Z`;

    const existingAppointment = await Appointment.findOne({ date: fullDate });
    //6
    if (existingAppointment) {
      console.log("error6");
      return res.status(400).json({ error: 'Ya existe una cita en la hora' });
      
    }

    const newAppointment = new Appointment({
        user,
        date: fullDate,
        service,
        status: true,
      });

      await newAppointment.save();
      console.log('Cita registrada exitosamente');
      res.status(201).json({ message: 'Cita registrada exitosamente' });
    
  } catch (error) {

    //mongoose.disconnect(() => {console.log('Desconexión de la base de datos');});

    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al registrar la cita' });
  }
});

function isWorkingDay(dateString) {
  const date = new Date(dateString); // Crear un objeto Date a partir del string
  const weekDay = date.getDay();
  return weekDay >= 1 && weekDay <= 5; // Lunes a viernes (semana laboral típica)
}

export default router;