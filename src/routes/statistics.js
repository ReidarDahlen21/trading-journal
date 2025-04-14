const express = require("express");
const Journal = require("../models/journal");
const router = express.Router();
const { Parser } = require("json2csv");

// Ruta para mostrar la vista de estadísticas
router.get("/", async (req, res) => {
  try {
    res.render("statistics");
  } catch (err) {
    console.error("Error al cargar la vista de estadísticas:", err);
    res.status(500).send("Error al cargar la página.");
  }
});

// Ruta para descargar CSV con codificación UTF-8
router.get("/download-csv", async (req, res) => {
  try {
    // Obtener los registros de la base de datos
    const journals = await Journal.find();

    if (!journals.length) {
      return res.status(404).send("No hay datos disponibles para exportar.");
    }

    // Campos a exportar
    const fields = [
      "fecha",
      "instrumento",
      "resultado",
      "estrategia",
      "emocionesAntes",
      "emocionesDurante",
      "emocionesDespues",
      "reflexionesBien",
      "reflexionMal",
      "reflexionAprendizaje",
      "reflexionFuturo",
      "screenshot1hr",
      "screenshot5m",
      "screenshot1m",
    ];

    const opts = { fields, delimiter: ";" };
    const parser = new Parser(opts);
    let csv = parser.parse(journals);

    // Agregar BOM para evitar errores de codificación
    csv = "\ufeff" + csv;

    // Configurar encabezados para la descarga
    res.header("Content-Type", "text/csv; charset=utf-8");
    res.header("Content-Disposition", "attachment; filename=journals.csv");
    return res.send(csv);
  } catch (err) {
    console.error("Error al generar CSV:", err);
    res.status(500).send("Error al generar el archivo CSV.");
  }
});

module.exports = router;
