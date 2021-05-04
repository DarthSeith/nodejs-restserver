// traer el modelo del rol de BD mongo
const RoleModel = require("../models/roleModel");

const esRoleValido = async (rol = "") => {
  const existeRol = await RoleModel.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol '${rol}' no esta registrado en la BD`);
  }
};

module.exports = { esRoleValido };
