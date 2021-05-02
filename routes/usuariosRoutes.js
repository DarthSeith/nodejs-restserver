const { Router } = require("express");
const {
  usuarioGet,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
  usuarioPost,
} = require("../controller/usuariosController");

const router = Router();

//peticion get
router.get("/", usuarioGet);
router.put("/", usuarioPut);
router.post("/", usuarioPost);
router.delete("/", usuarioDelete);
router.patch("/", usuarioPatch);

module.exports = router;
