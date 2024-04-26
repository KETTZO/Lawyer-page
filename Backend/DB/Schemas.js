import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  // Otros campos que desees incluir
});

userSchema.statics.emailExists = async function(email) {
  const user = await this.findOne({ email });
  return !!user; // Devuelve true si el correo electrónico está en uso, false si no
};

const appointmentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: Boolean, required: true },
  service: { type: String, maxlength: 100, required: true }
});

const serviceSchema = new mongoose.Schema({
  name: { type: String, maxlength: 100, required: true },
  desc: { type: String, maxlength: 128, required: true },
  price: { type: Number, required: true },
  status: { type: Boolean, required: true }
});

const User = mongoose.model('User', userSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);
const Service = mongoose.model('Service', serviceSchema);

export { User, Appointment, Service };