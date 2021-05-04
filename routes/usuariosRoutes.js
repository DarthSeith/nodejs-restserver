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
const { esRoleValido } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

//peticion get http://localhost:8080/api/usuarios?q=hola&nombre=rodrigo
router.get("/", usuarioGet);
// peticion put http://localhost:8080/api/usuarios/10
router.put("/:id", usuarioPut);

//validar el dato vamos a utilziar el middlewares express-validator, que se encuentra entre el "/" y el controlador
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio y mas de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "El correo no es valido").isEmail(),
    //check("rol", "No es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    //hacer una validacion con una coleccion de BD mongo
    check("rol").custom(esRoleValido),
    //despues de todas las validaciones del check, revisa la que va a ejecutar los errores
    validarCampos,
  ],
  usuarioPost
);
router.delete("/", usuarioDelete);
router.patch("/", usuarioPatch);

module.exports = router;
