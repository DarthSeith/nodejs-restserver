const { response } = require("express");

const usuarioGet = (req, res = response) => {
  const query = req.query;
  const { q, nombre, limit = 10 } = req.query;
  res.json({ msg: "get api desde Controlador", query, q, nombre, limit });
};

const usuarioPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({ msg: "Post api desde Controlador", nombre, edad });
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
