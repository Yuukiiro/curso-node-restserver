const { request, response } = require('express');

class Usuarios {
    get(req = request, res = response){
        const {
            nombre = null,
            apikey = null,
            page = 1,
            limit = 10
        } = req.query;

        res.json({
            msg: "Bienvenido a usuarios",
            nombre,
            apikey,
            page,
            limit,
        });
    }
    post(req, res = response){
        //const body = req.body;
        const {nombre, edad} = req.body;

        res.json({
            msg: "post / usuarios",
            nombre,
            edad
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