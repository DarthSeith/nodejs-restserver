const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    // con el require dotenv y el archivo .env recuperar el puerto
    this.port = process.env.PORT;
    // Middlewares, para
    this.middlewares();
    //rutas de la aplicacion
    this.routes();
  }

  middlewares() {
    // CORS ver en la pagina npm cors para ver su potencial
    //ya que puede hacer una lista blanca, etc
    this.app.use(cors());

    //directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    //peticion get
    this.app.get("/api", (req, res) => {
      // res.status(403).json({ msg: "ERROR" }); // enviar con estatus
      res.json({ msg: "get api" });
    });
    this.app.put("/api", (req, res) => {
      res.json({ msg: "put api" });
    });
    this.app.post("/api", (req, res) => {
      res.json({ msg: "post api" });
    });
    this.app.delete("/api", (req, res) => {
      res.json({ msg: "delete api" });
    });
    this.app.patch("/api", (req, res) => {
      res.json({ msg: "patch api" });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo aca http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
