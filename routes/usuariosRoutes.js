const { Router } = require("express");
// utilizar el express-validator
const { check } = require("express-validator");
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
router.put("/:id", usuarioPut);

//validar el dato vamos a utilziar el middlewares express-validator, que se encuentra entre el "/" y el controlador
router.post(
  "/",
  [
    check("correo", "El correo no es valido").isEmail()
  ],
  usuarioPost
);
router.delete("/", usuarioDelete);
router.patch("/", usuarioPatch);

module.exports = router;
