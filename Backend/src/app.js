import express from 'express';
import cors from 'cors';
import mongoose from '../DB/DbConnection.js';

//routes
import registerRouter from '../routes/Register.js';

const app = express();
app.use(express.json()); 

app.use(cors());

app.use("/api/Register", registerRouter);

app.listen(5000);
console.log('Server on port', 5000);