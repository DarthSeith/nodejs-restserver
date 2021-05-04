// traer el modelo del rol de BD mongo
const RoleModel = require("../models/roleModel");
const UsuarioModel = require("../models/usuarioModel");

const esRoleValido = async (rol = "") => {
  const existeRol = await RoleModel.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol '${rol}' no esta registrado en la BD`);
  }
};

//validar si el correo existe (cualquiera de las dos formas)
//const existeEmail = await Usuario.findOne({ correo: correo });

const existeEmail = async (correo = "") => {
  console.log("correo: ", correo);
  if(correo==""){
    throw new Error(`Debe ingresar el 'correo'`);
  }
  const existe = await UsuarioModel.findOne({ correo });
  if (existe) {
    throw new Error(`El correo esta registrado (${correo})`);
  }
};

module.exports = { esRoleValido, existeEmail };
