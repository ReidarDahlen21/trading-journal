const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Configuración de almacenamiento con multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/studies/"); // Guardar en la subcarpeta studies
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Renombrar archivo con timestamp
  },
});

const upload = multer({ storage: storage });

// Ruta para mostrar la página Studies
router.get("/", (req, res) => {
  res.render("studies");
});

// Ruta para manejar la subida de archivos desde Studies
router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No se subió ningún archivo.");
  }
  console.log("Archivo subido:", req.file.path);
  res.redirect("/studies");
});

module.exports = router;