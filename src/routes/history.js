const express = require("express");
const Journal = require("../models/journal");
const router = express.Router();

// Ruta para renderizar la página history.ejs
router.get("/", (req, res) => {
  res.render("history");
});

// Ruta para obtener los datos de la tabla en formato JSON
router.get("/data", async (req, res) => {
  try {
    const entries = await Journal.find().sort({ fecha: -1 });    
    res.json(entries);
  } catch (err) {
    console.error("Error fetching history data:", err);
    res.status(500).json({ error: "Error retrieving history data." });
  }
});

module.exports = router;
