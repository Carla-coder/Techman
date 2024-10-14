const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createEquipamento = async (req, res) => {
    try {
        const { nome, descricao } = req.body;

        if (!nome || !descricao) {
            return res.status(400).json({ message: "Nome e descrição são obrigatórios." });
        }

        const equipamento = await prisma.equipamento.create({
            data: {
                nome,
                descricao
            }
        });
        return res.status(201).json(equipamento);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const readEquipamento = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const equipamento = await prisma.equipamento.findUnique({
                where: { id: parseInt(id, 10) }
            });
            if (equipamento) {
                return res.json(equipamento);
            } else {
                return res.status(404).json({ message: "Equipamento não encontrado." });
            }
        } else {
            const equipamentos = await prisma.equipamento.findMany();
            return res.json(equipamentos);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateEquipamento = async (req, res) => {
    const { id } = req.params;
    try {
        const { nome, descricao } = req.body;
        const equipamento = await prisma.equipamento.update({
            where: { id: parseInt(id, 10) },
            data: { nome, descricao }
        });
        return res.status(202).json(equipamento);
    } catch (error) {
        return res.status(404).json({ message: "Equipamento não encontrado." });
    }
};

const deleteEquipamento = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.equipamento.delete({
            where: { id: parseInt(id, 10) }
        });
        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ message: "Equipamento não encontrado." });
    }
};

module.exports = {
    createEquipamento,
    readEquipamento,
    updateEquipamento,
    deleteEquipamento
};
