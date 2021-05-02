const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    // con el require dotenv y el archivo .env recuperar el puerto
    this.port = process.env.PORT;
    this.usuarioPath=process.env.USUARIO_PATH;
    // Middlewares, para
    this.middlewares();
    //rutas de la aplicacion
    this.routes();
    console.log(this.usuarioPath);
  }

  middlewares() {
    // CORS ver en la pagina npm cors para ver su potencial
    //ya que puede hacer una lista blanca, etc
    this.app.use(cors());

    //directorio publico
    this.app.use(express.static("public"));
  }
  routes() { 
    //configurar las rutas para usuario
    this.app.use(this.usuarioPath, require("../routes/usuariosRoutes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`servidor corriendo aca http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
