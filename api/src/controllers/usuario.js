const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar um novo usuário
const createUsuario = async (req, res) => {
    const { senha, perfilId } = req.body;

    try {
        const usuario = await prisma.usuario.create({
            data: {
                senha,
                perfilId,
            },
        });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

// Ler um usuário pelo ID
const readUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await prisma.usuario.findUnique({
            where: { id: Number(id) },
        });
        if (!usuario) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
};

// Ler todos os usuários
const readUsuarios = async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
};

// Atualizar um usuário
const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { senha, perfilId } = req.body;

    try {
        const usuario = await prisma.usuario.update({
            where: { id: Number(id) },
            data: {
                senha,
                perfilId,
            },
        });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

// Deletar um usuário
const deleteUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.usuario.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
};

module.exports = {
    createUsuario,
    readUsuarios,
    readUsuario,
    updateUsuario,
    deleteUsuario,
};
