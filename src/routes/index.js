const express = require("express");
const router = express.Router();

// Ruta para "/"
router.get("/", (req, res) => {
  const mensajes = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez con más inteligencia.",
    "La disciplina es el puente entre metas y logros.",
    "El progreso es imposible sin cambio.",
    "No cuentes los días, haz que los días cuenten.",
    "El éxito no se mide por lo que logras, sino por los obstáculos que superas.",
    "Los sueños no funcionan a menos que trabajes en ellos.",
    "Nunca dejes que el miedo decida tu futuro.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "La paciencia, la perseverancia y el sudor hacen una combinación imbatible para el éxito.",
    "Si puedes soñarlo, puedes hacerlo.",
    "La clave del éxito es empezar antes de estar listo.",
    "El aprendizaje nunca se agota.",
    "El mercado premia a los que tienen paciencia y estrategia.",
    "La preparación elimina el miedo.",
    "En cada operación hay una lección.",
    "El control de las emociones es el control del mercado.",
    "Cree en ti mismo y en tu proceso.",
    "El camino del éxito siempre está bajo construcción.",
    "Cada día es una nueva oportunidad para aprender y crecer."
  ];

  const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
  res.render("index", { mensaje: mensajeAleatorio });
});

// Ruta para "/index"
router.get("/index", (req, res) => {
  res.redirect("/"); // Redirige a la raíz
});

module.exports = router;