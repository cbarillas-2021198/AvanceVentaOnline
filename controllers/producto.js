


const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Producto = require('../models/producto');



const getProducto = async(req = request , res = response) =>{


    const listaProductos = await Promise.all([
        Producto.countDocuments(),
        Producto.find()
    ])

    res.json({
        msg: 'Get Api de productos',
        listaProductos
    })


}
const postProducto = async(req = request , res = response) =>{

    const {nombre, precio, stock} = req.body;
    const productosDB = new Producto({nombre, precio,  stock});
    const salt = bcryptjs.genSaltSync();
   
    await productosDB.save();

    res.status(201).json({
        msg: 'Post api',
        productosDB
    })

}
const putProducto = async(req = request , res = response) =>{

    const {id} = req.params;

    const {_id, estado, ...resto} = req.params;

    const productoEditar = await Producto.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'Put api',
        productoEditar
        
    })

}
const deleteProducto = async(req = request , res = response) =>{

    const {id} = req.params;

    const productoborrar = await Producto.findByIdAndDelete(id);

    res.json({
        msg: 'Delete api',
        productoborrar
    })

}

module.exports = {
    
    getProducto,
    deleteProducto,
    postProducto,
    putProducto

}