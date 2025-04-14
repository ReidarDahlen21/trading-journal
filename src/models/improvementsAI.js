const mongoose = require("mongoose");

const improvementsAISchema = new mongoose.Schema({
  user: { type: String, required: true },              // Nombre de usuario o ID
  startDate: { type: Date },                           // Fecha de inicio
  endDate: { type: Date },                             // Fecha de fin
  improvementsDescription: { type: String, required: true },
  improvementsDetail: { type: String, required: true }, // Texto en Markdown
});

// El nombre "ImprovementsAI" será el que uses para referenciar el modelo
module.exports = mongoose.model("ImprovementsAI", improvementsAISchema);
