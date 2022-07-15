const Role = require('../models/role');
const Usuario = require('../models/user');


const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});

    if(!existeRol){
        throw new Error();
    }
}

const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    
    if(existeEmail){
        throw new Error('El correo ya esta registrado.')
    }
}


module.exports = {
    esRolValido,
    emailExiste
}