const mongoose = require('mongoose');

const dbConnection = () => {
    try{
        mongoose.connect(process.env.MONGODB_CONNECTION);
        console.log('Base de datos conectada.');
    }catch(error){
        console.error(error);
        throw new Error('Error al iniciar la base de datos.');
    }
}

module.exports = {
    dbConnection
}