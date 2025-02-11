const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    descripcion: { type: String, default: '' }, // Default vacío para evitar undefined
    fechaCreacion: { type: Date, default: Date.now }
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;
