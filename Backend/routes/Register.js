import express from 'express';
//import { PrismaClient } from '@prisma/client'
import {checkUser} from '../verifyInfo/checkUser.js';
import bcrypt from 'bcrypt';

const router = express.Router();
//const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  
  const {name, lastName, username, email, password} = req.body;

  if(!!!name || !!!lastName || !!!username || !!!email || !!!password){
    return res.status(400).json({ error: 'Fields are required' });
  }
  
  //create user
  try {

    const hashedPassword = await bcrypt.hash(password, 10);
/*
    const existingUser = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const existingEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingEmail) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }
*/
    if(checkUser(req.body)){/*
      const user = await prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          name,
          lastName,
          email,
          avatar,
        },
      })*/;
  
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    }
    else{
      console.log('Formato de información incorrecto:');
      return res.status(400).json({error: 'incorrect Format'});
    }
    
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Ocurrió un error al registrar el usuario' });
  }
});

export default router;