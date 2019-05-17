const userModel = require('../model/user.model');

exports.createUser = (req, res) => {
    const user = new userModel(req.body);
    user.save().then(data=>{
        res.send({
            success:true,
            data:data
        })
    })
}

exports.getUsers = (req, res) => {
    userModel.find().then(data => {
        res.render('userList', {
            data: data
        })
    })
}

exports.getSingleUser = (req, res) => {
    let id = req.params.id;
    userModel.findById(id).then(data => {
        res.send({
            success:true,
            data:data
        })
    })
}

exports.updateUser = (req, res) => {
    let id = req.params.id;
    let data = req.body;
    userModel.findByIdAndUpdate(id, data).then(data => {
        res.send({
            success:true,
            data:data
        })
    })
}

exports.deleteUser = (req, res) => {
    let id = req.params.id;
    let data = req.body;
    userModel.findByIdAndRemove(id).then(data => {
        res.send({
            success:true,
            message:'Deleted Successfully'
        })
    }).catch(err => {
        res.send({
            success:true,
            message:'Deleted Error'
        })
    })
}