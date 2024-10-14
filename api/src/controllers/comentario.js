const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createComentario = async (req, res) => {
    try {
        const { texto, perfilId, equipamentoId } = req.body;

        if (!texto || !perfilId || !equipamentoId) {
            return res.status(400).json({ message: "Texto, perfilId e equipamentoId são obrigatórios." });
        }

        const comentario = await prisma.comentario.create({
            data: {
                texto,
                perfilId: parseInt(perfilId, 10),
                equipamentoId: parseInt(equipamentoId, 10)
            }
        });
        return res.status(201).json(comentario);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const readComentario = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const comentario = await prisma.comentario.findUnique({
                where: { id: parseInt(id, 10) }
            });
            if (comentario) {
                return res.json(comentario);
            } else {
                return res.status(404).json({ message: "Comentário não encontrado." });
            }
        } else {
            const comentarios = await prisma.comentario.findMany();
            return res.json(comentarios);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateComentario = async (req, res) => {
    const { id } = req.params;
    try {
        const { texto, perfilId, equipamentoId } = req.body;
        const comentario = await prisma.comentario.update({
            where: { id: parseInt(id, 10) },
            data: { texto, perfilId: parseInt(perfilId, 10), equipamentoId: parseInt(equipamentoId, 10) }
        });
        return res.status(202).json(comentario);
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
