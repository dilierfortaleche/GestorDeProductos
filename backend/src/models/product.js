const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
    stock: { type: Number, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
