const express = require("express");

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
      //directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.get("/api", (req, res) => {
      res.send("Hola desde el server");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo aca http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
