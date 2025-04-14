const mongoose = require("mongoose");
require("dotenv").config(); // Para cargar la variable MONGO_URI si usas .env

// Importamos el modelo de la colección
const ImprovementsAI = require("../models/improvementsAI");

// Función para conectar a MongoDB (puede ser llamada por otros módulos si no está conectada aún)
const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return; // Evita múltiples conexiones
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    throw error;
  }
};

// Función que inserta un reporte en la base de datos
const insertImprovement = async ({ user, startDate, endDate, improvementsDescription, improvementsDetail }) => {
  try {
    await connectDB(); // Conectar si no está conectado

    const newImprovement = new ImprovementsAI({
      user,
      startDate,
      endDate,
      improvementsDescription,
      improvementsDetail
    });

    await newImprovement.save();
    console.log("✅ Informe guardado en la colección improvementsais");
    return { success: true, message: "Informe guardado correctamente" };
  } catch (error) {
    console.error("❌ Error al guardar el informe:", error);
    return { success: false, message: "Error al guardar el informe" };
  }
};

// Exportamos la función para que otros archivos la usen
module.exports = { insertImprovement };
