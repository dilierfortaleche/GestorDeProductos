const express = require('express');
const router = express.Router();
const { register, login, obtenerUsuarios, eliminarUsuario } = require('../controllers/UserController');

router.post('/register', register);
router.post('/login', login);
router.get('/', obtenerUsuarios);
router.delete('/:id', eliminarUsuario);

module.exports = router;
