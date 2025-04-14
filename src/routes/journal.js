const express = require("express");
const multer = require("multer");
const path = require("path");
const Journal = require("../models/journal");

const router = express.Router();

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/journal/"); // Carpeta donde se guardarán las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Renombrar los archivos
  },
});

const upload = multer({ storage: storage });


router.get("/", (req, res) => {
  res.render("journal");
});

// Ruta para manejar el envío del formulario
router.post(
  "/save",
  upload.fields([
    { name: "screenshot1hr", maxCount: 1 },
    { name: "screenshot5m", maxCount: 1 },
    { name: "screenshot1m", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      console.log("Archivos recibidos:", req.files); // Verifica las imágenes recibidas
      console.log("Datos del formulario:", req.body); // Verifica los demás campos del formulario

      const newEntry = new Journal({
        fecha: req.body.fecha,
        instrumento: req.body.instrumento,
        resultado: req.body.resultado,
        estrategia: req.body.estrategia,
        emocionesAntes: req.body.emocionesAntes,
        emocionesDurante: req.body.emocionesDurante,
        emocionesDespues: req.body.emocionesDespues,
        reflexionesBien: req.body.reflexionesBien,
        reflexionMal: req.body.reflexionMal,
        reflexionAprendizaje: req.body.reflexionAprendizaje,
        reflexionFuturo: req.body.reflexionFuturo,
        screenshot1hr: req.files.screenshot1hr ? req.files.screenshot1hr[0].path : null,
        screenshot5m: req.files.screenshot5m ? req.files.screenshot5m[0].path : null,
        screenshot1m: req.files.screenshot1m ? req.files.screenshot1m[0].path : null,
      });

      await newEntry.save();
      res.redirect("/journal");
    } catch (err) {
      console.error("Error saving journal:", err);
      res.status(500).send("Error saving data.");
    }
  }
);

module.exports = router;


