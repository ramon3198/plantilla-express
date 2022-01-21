const { response } = require('express');

const usuariosGet = (req, res = response)=>{
    res.json({
        msg: 'GET API CONTROLLER'
    });
}
const usuariosPost = (req, res = response)=>{
    const body = req.body;
    res.json({
        msg: 'POST API CONTROLLER',
        info: body
    });
}
const usuariosPut = (req, res = response)=>{
    const body = req.params.id;
    res.json({
        msg: 'PUT API CONTROLLER',
        body
    });
}
const usuariosPatch = (req, res = response)=>{
    res.json({
        msg: 'PATCH API CONTROLLER'
    });
}
const usuariosDelete = (req, res = response)=>{
    res.json({
        msg: 'DELETE API CONTROLLER'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}