const { Router } = require('express');
const Usuarios = require('../controllers/user');

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
router.post('/', usuarios.post);
router.put('/:id', usuarios.put);
router.patch('/', usuarios.patch);
router.delete('/', usuarios.delete);

module.exports = router;