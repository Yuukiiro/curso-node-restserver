// imports
const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.routeUsuarios = '/api/usuarios';

        // Middleware
        this.middlewares();

        // Routes
        this.routes();
    }
    middlewares(){
        // directorio publico
        this.app.use(express.static('public'));

        // cors
        this.app.use(cors());

        // lectura y parseo del body
        this.app.use(express.json());
    }
    routes(){
        // this.app.get('/tienda', (req, res) => {
        //     res.json({
        //         msg: "Bienvenido a la tienda"
        //     });
        // });

        this.app.use(
            this.routeUsuarios,
            require('../routes/user')
        );
    }
    listen(){
        // puerto
        this.app.listen(this.port, () => {
            console.log('App listening at port:', this.port);
        });
    }
}

module.exports = Server;