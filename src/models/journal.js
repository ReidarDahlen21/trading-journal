const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema({
  fecha: { type: Date, required: true }, // Campo obligatorio
  instrumento: { type: String, maxlength: 50, required: true }, // Campo obligatorio
  resultado: { type: String, enum: ["Win", "Loss", "Break Even"], required: true }, // Campo obligatorio
  estrategia: { type: String, maxlength: 200, required: true }, // Campo obligatorio
  emocionesAntes: { type: String, maxlength: 1000, required: true }, // Campo obligatorio
  emocionesDurante: { type: String, maxlength: 1000, required: true }, // Campo obligatorio
  emocionesDespues: { type: String, maxlength: 1000, required: true }, // Campo obligatorio
  reflexionesBien: { type: String, maxlength: 1000, required: true }, // Campo obligatorio
  reflexionMal: { type: String, maxlength: 1000, required: true }, // Campo obligatorio
  reflexionAprendizaje: { type: String, maxlength: 1000, required: true }, // Campo obligatorio
  reflexionFuturo: { type: String, maxlength: 1000, required: true }, // Campo obligatorio
  screenshot1hr: { type: String }, // No obligatorio
  screenshot5m: { type: String },  // No obligatorio
  screenshot1m: { type: String },  // No obligatorio
});

module.exports = mongoose.model("Journal", journalSchema);
