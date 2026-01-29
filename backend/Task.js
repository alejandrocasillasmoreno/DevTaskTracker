const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  titulo: { type: String, required: true }, // [cite: 28]
  tecnologia: { type: String },             // [cite: 29]
  estado: { 
    type: String, 
    enum: ['pending', 'done'], 
    default: 'pending' 
  },                                        // [cite: 30]
  fecha: { type: Date, default: Date.now }   // [cite: 30]
});

module.exports = mongoose.model('Task', taskSchema);