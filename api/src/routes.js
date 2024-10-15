const express = require('express');
const router = express.Router();
const usuario = require('./controllers/usuario.js'); 
const equipamento = require('./controllers/equipamento.js'); 
const comentario = require('./controllers/comentario.js'); 

// Rotas oara usuários
router.get('api/usuarios/:id', usuario.readUsuario); 
router.get('api/usuarios', usuario.readUsuarios); 
router.post('api/usuarios', usuario.createUsuario);
router.post('api/login', usuario.postLogin);

// Rotas para equipamentos
router.get('api/equipamentos/:id', equipamento.readEquipamento); 
router.get('api/equipamentos', equipamento.readEquipamentos); 
router.post('api/equipamentos', equipamento.createEquipamento);
router.put('api/equipamentos/:id', equipamento.updateEquipamento);
router.delete('api/equipamentos/:id', equipamento.deleteEquipamento); 

// Rotas para comentários
router.get('api/comentarios/:id', comentario.readComentario); 
router.get('api/comentarios', comentario.readComentarios);
router.post('api/comentarios', comentario.createComentario);
router.delete('api/comentarios/:id', comentario.deleteComentario);


module.exports = router;

