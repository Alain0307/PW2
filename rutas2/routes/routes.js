const  express = require('express');
const path = require('path');

const router = express.Router();

// Ruta principal
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"));
});

router.get("/registros",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/registros.html"));
});

// Agregando 4 rutas más
router.get("/acerca-de",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/acerca-de.html"));
});

router.get("/servicios",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/servicios.html"));
});

router.get("/contacto",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/contacto.html"));
});

router.get("/productos",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/productos.html"));
});

module.exports=router;