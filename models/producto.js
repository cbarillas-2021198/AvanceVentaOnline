const { Schema, model } = require("mongoose")

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true

    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    stock: {
        type: Number,
        required: [true, 'El campo stock es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
})

module.exports = model('Producto', ProductoSchema)