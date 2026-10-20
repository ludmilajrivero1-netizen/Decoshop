const express = require("express");
const path = require("path");

const app = express();

const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));

app.use("/", mainRoutes);
app.use('/Formulario', (req, res) =>{
    res.sendFile(path.join(__dirname,"vistas",'index2.html')) 
    });


app.listen(3000,'0.0.0.0', () =>{
    console.log("servidor corriendo en el puerto 3000");

});

/*app.use(express.static("public"));
app.get("/",(req, res) => {
    res.sendFile(path.join(_dirname,"vistas","index2.html"))
});*/
