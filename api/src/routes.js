const express = require('express');
const router = express.Router();
const usuario = require('./controllers/usuario.js'); 
const equipamento = require('./controllers/equipamento.js'); 
const comentario = require('./controllers/comentario.js'); 

// Rotas oara usuários
router.get('/usuarios/:id', usuario.readUsuario); 
router.get('/usuarios', usuario.readUsuarios); 
router.post('/usuarios', usuario.createUsuario);
router.post('/login', usuario.postLogin);

// Rotas para equipamentos
router.get('/equipamentos/:id', equipamento.readEquipamento); 
router.get('/equipamentos', equipamento.readEquipamentos); 
router.post('/equipamentos', equipamento.createEquipamento);
router.put('/equipamentos/:id', equipamento.updateEquipamento);
router.delete('/equipamentos/:id', equipamento.deleteEquipamento); 

// Rotas para comentários
router.get('/comentarios/:id', comentario.readComentario); 
router.get('/comentarios', comentario.readComentarios);
router.post('/comentarios', comentario.createComentario);
router.delete('/comentarios/:id', comentario.deleteComentario);


module.exports = router;

