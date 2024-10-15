// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// const createComentario = async (req, res) => {
//     try {
//         const { texto, perfilId, equipamentoId } = req.body;

//         if (!texto || !perfilId || !equipamentoId) {
//             return res.status(400).json({ message: "Texto, perfilId e equipamentoId são obrigatórios." });
//         }

//         const comentario = await prisma.comentario.create({
//             data: {
//                 texto,
//                 perfilId: parseInt(perfilId, 10),
//                 equipamentoId: parseInt(equipamentoId, 10)
//             }
//         });
//         return res.status(201).json(comentario);
//     } catch (error) {
//         return res.status(400).json({ message: error.message });
//     }
// };

// const readComentario = async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (id) {
//             const comentario = await prisma.comentario.findUnique({
//                 where: { id: parseInt(id, 10) }
//             });
//             if (comentario) {
//                 return res.json(comentario);
//             } else {
//                 return res.status(404).json({ message: "Comentário não encontrado." });
//             }
//         } else {
//             const comentarios = await prisma.comentario.findMany();
//             return res.json(comentarios);
//         }
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// };

// // Função para ler todos os comentários
// const readComentarios = async (req, res) => {
//     try {
//         const comentarios = await prisma.comentario.findMany();
//         return res.json(comentarios);
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// };

// const updateComentario = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const { texto, perfilId, equipamentoId } = req.body;
//         const comentario = await prisma.comentario.update({
//             where: { id: parseInt(id, 10) },
//             data: { texto, perfilId: parseInt(perfilId, 10), equipamentoId: parseInt(equipamentoId, 10) }
//         });
//         return res.status(202).json(comentario);
//     } catch (error) {
//         return res.status(404).json({ message: "Comentário não encontrado." });
//     }
// };

// const deleteComentario = async (req, res) => {
//     const { id } = req.params;
//     try {
//         await prisma.comentario.delete({
//             where: { id: parseInt(id, 10) }
//         });
//         return res.status(204).send();
//     } catch (error) {
//         return res.status(404).json({ message: "Comentário não encontrado." });
//     }
// };

// module.exports = {
//     createComentario,
//     readComentario,
//     readComentarios,
//     updateComentario,
//     deleteComentario
// };


const { PrismaClient } = require('@prisma/client'); 
const prisma = new PrismaClient();

const createComentario = async (req, res) => {
    try {
        const { comentario, perfilId, equipamentoId, tipo } = req.body; // Agora inclui 'tipo'

        // Validação de entradas
        if (!comentario || !perfilId || !equipamentoId || !tipo) {
            return res.status(400).json({ message: "Comentario, perfilId, equipamentoId e tipo são obrigatórios." });
        }

        // Criação do comentário
        const novoComentario = await prisma.comentario.create({
            data: {
                comentario, // Usar o campo correto que você tem no modelo
                perfilId: parseInt(perfilId, 10), // Certifique-se de que isso esteja correto
                equipamentoId: parseInt(equipamentoId, 10), // Certifique-se de que isso esteja correto
                tipo, // Adicionando o tipo do comentário
                data: new Date() // Atribuindo a data atual
            }
        });
        return res.status(201).json(novoComentario);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const readComentario = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const comentario = await prisma.comentario.findUnique({
                where: { id: parseInt(id, 10) },
                include: {
                    perfil: true, // Para incluir dados do perfil relacionado
                    equipamento: true // Para incluir dados do equipamento relacionado
                }
            });
            if (comentario) {
                return res.json(comentario);
            } else {
                return res.status(404).json({ message: "Comentário não encontrado." });
            }
        } else {
            const comentarios = await prisma.comentario.findMany({
                include: {
                    perfil: true,
                    equipamento: true
                }
            });
            return res.json(comentarios);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateComentario = async (req, res) => {
    const { id } = req.params;
    try {
        const { comentario, perfilId, equipamentoId, tipo } = req.body;

        const comentarioAtualizado = await prisma.comentario.update({
            where: { id: parseInt(id, 10) },
            data: { 
                comentario,
                perfilId: parseInt(perfilId, 10),
                equipamentoId: parseInt(equipamentoId, 10),
                tipo
            }
        });
        return res.status(202).json(comentarioAtualizado);
    } catch (error) {
        return res.status(404).json({ message: "Comentário não encontrado." });
    }
};

const deleteComentario = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.comentario.delete({
            where: { id: parseInt(id, 10) }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ message: "Comentário não encontrado." });
    }
};

module.exports = {
    createComentario,
    readComentario,
    updateComentario,
    deleteComentario
};
