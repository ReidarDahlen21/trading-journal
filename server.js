const express = require("express");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const connectDB = require("./src/db/connect");
require("dotenv").config();
require("./src/config/passport"); // Importar configuración de Passport

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());
app.use(express.static("src/public"));
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "secreto", // Cambia esto en producción por una variable de entorno
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());


// Rutas
const indexRoutes = require("./src/routes/index");
const journalRoutes = require("./src/routes/journal");
const historyRoutes = require("./src/routes/history");
const statisticsRoutes = require("./src/routes/statistics");
const studiesRoutes = require("./src/routes/studies");
const authRoutes = require("./src/routes/auth");
const improvementsRoutes = require("./src/routes/improvements");

app.use("/", indexRoutes);
app.use("/journal", journalRoutes);
app.use("/history", historyRoutes);
app.use("/statistics", statisticsRoutes);
app.use("/studies", studiesRoutes);
app.use("/", authRoutes);
app.use("/improvements", improvementsRoutes);

// Conexión a MongoDB y arranque del servidor
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});


//npx nodemon server.js
//pm2 start server.js --name trading-journal --watch