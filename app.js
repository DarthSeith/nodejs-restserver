require("dotenv").config();
const express = require("express");
const app = express();

// con el require dotenv y el archivo .env recuperar el puerto
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Worlds");
});

app.listen(PORT, () => {
  console.log(`servidor corriendo aca http://localhost:${PORT}`);
});
