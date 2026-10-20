const productmodel = require("../models/productmodel");

const mostrarproductos = (req, res) => {
    productmodel.obtenerProductos((productos) => {
        res.render("index", {productos});
    });
}

module.exports = {
    mostrarproductos
};