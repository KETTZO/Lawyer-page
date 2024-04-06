import express from 'express';
import {checkUser} from '../verifyInfo/checkUser.js';
import bcrypt from 'bcrypt';
import {User, Appointment} from '../DB/Schemas.js'

const router = express.Router();

router.post("/", async (req, res) => {
  
  const {name, email, password} = req.body;

  if(!!!name || !!!email || !!!password){
    return res.status(400).json({ error: 'Fields are required' });
  }
  
  //create user
  try {

    //connectToDatabase();
    const hashedPassword = await bcrypt.hash(password, 10);

    const emailInUse = await User.emailExists(email);

    if (emailInUse) {
      console.log('El correo electrónico ya está en uso');
      return res.status(400).json({ message: 'El usuario ya existe' });
    } else {
      if(checkUser(req.body)){

        // Registra un nuevo usuario
        const newUser = new User({
          email: email,
          name: name,
          password: hashedPassword,
        });

        await newUser.save();
        console.log('Usuario registrado exitosamente');
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
      }
    }
    //mongoose.disconnect(() => {console.log('Desconexión de la base de datos');});
    
  } catch (error) {

    //mongoose.disconnect(() => {console.log('Desconexión de la base de datos');});

    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al registrar el usuario' });
  }
});

export default router;