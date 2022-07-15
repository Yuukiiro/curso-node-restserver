const { Router } = require('express');
const { check } = require('express-validator');

const Usuarios = require('../controllers/user');

const { ValidarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste } = require('../helpers/db-validators');

const router = Router();
const usuarios = new Usuarios();

// router.get('/', (req, res) => {
//     //res.send('Bienvenido a usuarios');
//     res.json({
//         msg: "Bienvenido a usuarios"
//     });
//     // res.status(403).json({
//     //     msg: "Permiso denegado"
//     // });
// });
router.get('/', usuarios.get);
router.post('/', [
    check('nombre','El nombre es obligatorio.').not().isEmpty(),
    check('password','El password debe tener más de 6 caracteres.').isLength({min: 6}),
    check('correo','El correo no es valido.').isEmail(),
    check('correo').custom(emailExiste),
    //check('rol','No es un rol valido.').isIn(['ADMIN_ROLE','USER_ROLE']),
    // = check('rol').custom((rol) => esRolValido(rol)),
    check('rol').custom(esRolValido),
    ValidarCampos
], usuarios.post);
router.put('/:id', usuarios.put);
router.patch('/', usuarios.patch);
router.delete('/', usuarios.delete);

module.exports = router;