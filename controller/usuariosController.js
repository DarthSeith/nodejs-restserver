const { response } = require("express");
const Usuario = require("../models/usuarioModel");
const bcryptjs = require("bcryptjs");
const { validarCampos } = require("../middlewares/validar-campos");

const usuarioGet = (req, res = response) => {
  const query = req.query;
  const { q, nombre, limit = 10 } = req.query;
  res.json({ msg: "get api desde Controlador", query, q, nombre, limit });
};

const usuarioPost = async (req, res = response) => {
  

  const body = req.body;
  const { nombre, correo, password, rol } = req.body;
  console.log(nombre, correo, password, rol);
  //se instancia el usuario modelo con mongoose
  //const usuarioModel = new Usuario(body);
  const usuarioModel = new Usuario({ nombre, correo, password, rol });
  // console.log("usuario:", usuarioModel);

  //validar si el correo existe (cualquiera de las dos formas)
  //const existeEmail = await Usuario.findOne({ correo: correo });
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res
      .status(400)
      .json({ msg: `El correo esta registrado (${correo})` });
  }

  //encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuarioModel.password = bcryptjs.hashSync(password, salt);

  //guardar en mongo
  await usuarioModel.save();

  res.json({
    msg: "Post api desde Controlador",

    usuarioModel,
  });
};

const usuarioPut = (req, res = response) => {
  const { id } = req.params;
  res.json({ msg: "Put api desde Controlador", id: id });
};

const usuarioPatch = (req, res = response) => {
  res.json({ msg: "Patch api desde Controlador" });
};
const usuarioDelete = (req, res = response) => {
  res.json({ msg: "Delete api desde Controlador" });
};
module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete,
};
