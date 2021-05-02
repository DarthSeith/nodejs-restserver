const { Router } = require("express");
const {
  usuarioGet,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
  usuarioPost,
} = require("../controller/usuariosController");

const router = Router();

//peticion get http://localhost:8080/api/usuarios?q=hola&nombre=rodrigo
router.get("/", usuarioGet);
// peticion put http://localhost:8080/api/usuarios/10
router.put('/:id', usuarioPut);
router.post("/", usuarioPost);
router.delete("/", usuarioDelete);
router.patch("/", usuarioPatch);

module.exports = router;
