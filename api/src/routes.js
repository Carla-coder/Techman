const express = require('express');

const comentarios = require('./controllers/comentario');
const equipamentos = require('./controllers/equipamento');
const usuarios = require('./controllers/usuario');
const perfis = require('./controllers/equipamento');

const router = express.Router();

router.get('/comentarios', comentarios.read);
router.get('/comentarios/:id', comentarios.readbyequip);
router.post('/comentarios', comentarios.create);
router.put('/comentarios/:id/:perfil', comentarios.update);
router.patch('/comentario/:id/:perfil', comentarios.update);
router.delete('/comentarios/:id', comentarios.del);

router.get('/equipamentos', equipamentos.read);
router.post('/equipamentos', equipamentos.create);
router.put('/equipamentos/:id', equipamentos.update);
router.delete('/equipamentos/:id', equipamentos.del);

router.get('/perfis', perfis.read);
router.post('/perfis', perfis.create);
router.put('/perfis/:id', perfis.update);
router.delete('/perfis/:id', perfis.del);

router.get('/usuario', usuarios.read);
router.post('/usuario', usuarios.create);
router.put('/usuario/:id', usuarios.update);
router.delete('/usuario/:id', usuarios.del);

module.exports = router;
