const { request, response } = require('express');

const bcryptjs = require('bcryptjs');

const Usuario = require('../models/user');

class Usuarios {
    get(req = request, res = response){
        // body
        const body = req.body;
        
        // query
        const {
            apikey = null,
            page = 1,
            limit = 10
        } = req.query;

        res.json({
            msg: "Bienvenido a usuarios",
            apikey,
            page,
            limit
        });
    }
    async post(req, res = response){
        // body
        const body = req.body;
        const {
            nombre,
            correo,
            password,
            rol
        } = req.body;

        // Usuario (mongoose)
        const usuario = new Usuario({
            nombre,
            correo,
            password,
            rol
        });

        // Guardar en DB
        usuario.save();

        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);
        res.json({
            msg: "post / usuarios",
            usuario
        });
    }
    put(req, res = response){
        const id = req.params.id;
        res.json({
            msg: "put / usuarios",
            id
        });
    }
    patch(req, res = response){
        res.json({
            msg: "patch / usuarios"
        });
    }
    delete(req, res = response){
        res.json({
            msg: "delete / usuarios"
        });
    }
}


module.exports = Usuarios;