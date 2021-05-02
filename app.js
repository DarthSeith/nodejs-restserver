require("dotenv").config();

//llamamos a la clase que creamos
const Server = require("./models/server");
const server = new Server();
//llamamos donde tiene que escuchar
server.listen();
