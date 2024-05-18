import express from 'express';
import cors from 'cors';
import mongoose from '../DB/DbConnection.js';
import bcrypt from 'bcrypt';

//routes
import registerRouter from '../routes/Register.js';
import LoginRouter from '../routes/Login.js';
import AppointmentRouter from '../routes/Appointment.js';
import ServiceRouter from '../routes/Services.js';
import GetFreeHoursRouter from '../routes/GetFreeHours.js';

const app = express();
app.use(express.json()); 

app.use(cors());

app.use("/api/Register", registerRouter);
app.use("/api/Login", LoginRouter);
app.use("/api/Appointment", AppointmentRouter)
app.use("/api/Service", ServiceRouter)
app.use("/api/GetFreeHours", GetFreeHoursRouter)

app.listen(5000);
console.log('Server on port', 5000);