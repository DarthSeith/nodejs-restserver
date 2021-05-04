const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    require: [true, "El nombre es obligatorio"],
  },
  correo: {
    type: String,
    require: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "El constraseña es obligatorio"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    require: [true, "El constraseña es obligatorio"],
    enum: ["ADMIN_ROLE", "USER_ROLE", "VENTA_ROLE"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  //si es un usuario creado por google
  google: {
    type: Boolean,
    default: false,
  },
});

/**
 * Sobreescribimos el toJSON para que no salga las variables
 * __v, password
 * @returns nuevoUsuario
 *
 */
UsuarioSchema.methods.toJSON = function () {
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
};

module.exports = model("Usuario", UsuarioSchema);
