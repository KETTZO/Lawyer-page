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
  title: String,
  description: String,
  date: Date,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  // Otros campos que desees incluir
});

const User = mongoose.model('User', userSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);

export { User, Appointment };