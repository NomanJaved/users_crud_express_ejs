const userModel = require('../model/user.model');

exports.createUser = (req, res) => {
    console.log(req.body);
    
    if(req.body == '' || typeof req.body == 'undefined'){
        res.render('createUser');
    }else{
        console.log("req.body");
        console.log(req.body);
        const user = new userModel(req.body);
        user.save().then(data=>{
            req.flash('signupMessage', "User created successsfully.");
            res.redirect('/users');            
        })
    }
}

exports.getUsers = (req, res) => {
    let signupMessage = req.flash('signupMessage');
    userModel.find().then(data => {        
        res.render('userList', {
            data: data,
            msg: signupMessage
        })        
    })
}


exports.getSingleUser = (req, res) => {
    let id = req.params.id;
    userModel.findById(id).then(data => {
        // console.log("Hello get single user");
        res.render('editUser', {
            data: data
        })
        // res.send({
        //     success:true,
        //     data_edit:data
        // })
    })
}

exports.updateUser = (req, res) => {
    console.log(req.body);
    let id = req.body.id;
    var data = {        
        user_name : req.body.user_name,
        email : req.body.email,
        active : req.body.status
    }
    console.log(data);    
    
    userModel.findByIdAndUpdate(id, data).then(data => {
        // res.send({
        //     success:true,
        //     data:data,
        //     message: 'User updated.'
        // })
        res.redirect('/users');
    }).catch(err => {
        res.send({
            success:true,
            message:'update Error'
        })
    })
}

exports.deleteUser = (req, res) => {    
    let id = req.params.id;
    let data = req.body;
    userModel.findByIdAndRemove(id).then(data => {
        // res.send({
        //     success:true,
        //     message:'Deleted Successfully'
        // })
        res.redirect('/users');
    }).catch(err => {
        res.send({
            success:true,
            message:'Deleted Error'
        })
    })
}
