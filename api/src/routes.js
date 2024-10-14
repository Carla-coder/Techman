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

// Adicionando rota para login
router.post('/login', async (req, res) => {
    const { senha } = req.body;

    try {
        // Procura por um usuário que tenha a senha enviada
        const usuario = await prisma.usuario.findFirst({
            where: { senha: senha }
        });

        if (!usuario) {
            // Retorna 401 (não autorizado) se a senha estiver incorreta
            return res.status(401).json({ error: "Senha incorreta" });
        }

        // Retorna o perfil do usuário se a senha estiver correta
        const perfil = await prisma.perfil.findUnique({
            where: { id: usuario.perfilId }
        });

        res.json({ perfil: perfil.perfil }); // Envia o perfil como resposta
    } catch (error) {
        res.status(500).json({ error: "Erro no servidor" });
    }
});


module.exports = router;

