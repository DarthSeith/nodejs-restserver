const { validationResult } = require("express-validator");

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  //esto es para que siga con el siguiente middlewares
  next();
};

module.exports = { validarCampos };
