const express = require("express");
const router = express.Router();
const { marked } = require("marked"); // Importación correcta para versiones recientes
const ImprovementsAI = require("../models/improvementsAI");

// Configuración de marked para evitar que meta <pre><code>
marked.setOptions({
  gfm: true,  // GitHub Flavored Markdown
  breaks: true, // Convierte saltos de línea en <br>
  highlight: false, // Desactiva resaltado automático de código
  smartypants: true // Mejora comillas y guiones
});

router.get("/", async (req, res) => {
  try {
    const lastReport = await ImprovementsAI.findOne().sort({ _id: -1 });

    if (!lastReport) {
      return res.render("improvements", {
        improvementsDescription: "Sin registros aún",
        improvementsDetailHtml: "<p>No hay contenido disponible.</p>"
      });
    }

    // 🚀 Limpieza de Markdown antes de pasarlo a `marked`
    let markdownText = String(lastReport.improvementsDetail).trim();

    // 🔹 Eliminar espacios en blanco al inicio de cada línea para evitar que `marked` lo trate como código
    markdownText = markdownText.split("\n").map(line => line.trimStart()).join("\n");

    // 🔹 Convertir Markdown a HTML
    let improvementsDetailHtml = marked.parse(markdownText);

    res.render("improvements", {
      improvementsDescription: lastReport.improvementsDescription,
      improvementsDetailHtml
    });

  } catch (error) {
    console.error("Error fetching last improvementsAI record:", error);
    res.render("improvements", {
      improvementsDescription: "Error",
      improvementsDetailHtml: `<p>Ocurrió un error al cargar los datos: ${error.message}</p>`
    });
  }
});

module.exports = router;
