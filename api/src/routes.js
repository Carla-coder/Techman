const express = require('express');
const router = express.Router();
const usuario = require('./controllers/usuario.js'); 
const equipamento = require('./controllers/equipamento.js'); 
const comentario = require('./controllers/comentario.js'); 

router.get('/usuarios/:id', usuario.readUsuario); 
router.get('/usuarios', usuario.readUsuario); 
router.post('/usuarios', usuario.createUsuario);
router.get('/equipamentos/:id', equipamento.readEquipamento); 
router.get('/equipamentos', equipamento.readEquipamento); 
router.post('/equipamentos', equipamento.createEquipamento);
router.delete('/equipamentos/:id', equipamento.deleteEquipamento); 
router.get('/comentarios/:id', comentario.readComentario); 
router.get('/comentarios', comentario.readComentario);
router.post('/comentarios', comentario.createComentario);
router.delete('/comentarios/:id', comentario.deleteComentario);

module.exports = router;

