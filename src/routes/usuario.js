const { render } = require("ejs");
const express = require("express");
const { json } = require("body-parser");
const router = express.Router();
const request = require("request");
const client = require("../libs/dbConnect");

router.get("/", (req, res) => {
    //console.log("todo nazi");
    client.connect(async (err) => {
        if (err) {
            console.log("Error al conectar");
        } else {
            let collection = client.db("test").collection("alumno");
            let alumnos = collection.find()
            .toArray(function (err, result) {
                if (result.length === 0) {
                    console.log("coleccion sin datos");
                } else {
                    console.log("datos en la coleccion");
                }
            });
            console.log(alumnos[1]);
        }
    });

    req.session = null;
    res.render("././views/usuario/index.ejs");
});

module.exports = router;
