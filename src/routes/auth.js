const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const router = express.Router();

// Renderizar formulario de registro
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Registro de usuario
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).send("El usuario ya existe");

    const user = new User({ name, email, password });
    await user.save();
    res.redirect("/login");
  } catch (err) {
    res.status(500).send("Error al registrar usuario");
  }
});


// Renderizar formulario de login
router.get("/login", (req, res) => {
  res.render("login");
});

// Login con estrategia local
router.post("/login", passport.authenticate("local", {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
  failureFlash: true
}));

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).send("Error al cerrar sesión");
    res.redirect("/login");
  });
});

// Autenticación con Google
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

module.exports = router;
