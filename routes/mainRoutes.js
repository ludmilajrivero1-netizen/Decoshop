const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

exports.router = router;

router.get("/", (req, res) => {
 const productos = productController.obtenerProductos();
    res.render("index", { productos: productos });
});
router.get("/login", (req, res) => {
    res.render("login")
});
router.post("/login", (req, res) =>{
    const { correo, contraseña } = req.body;

 if(correo == "ludmilajrivero1@gmail.com" && contraseña == "1234") {
       res.redirect("/");
    } else {
        res.send("No fue posible acceder a la cuenta");
    } 
});

router.post("/formulario", (req, res) => {
    const { nombre, correo, mensaje } = req.body;
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);
    res.send("¡Gracias por envíar su sugerencia!");
});
router.get("/producto", (req, res) => {

    const id = req.query.id;

    const producto = productos.find(p => p.id == id);

    res.render("detalle", { producto });

});
console.log("mainRoutes cargando");
module.exports = router; 