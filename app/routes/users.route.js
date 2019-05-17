module.exports = (app) => {

    const userController = require('../controller/users.controller');

    app.post('/create', userController.createUser);
    app.get('/users', userController.getUsers);
    app.get('/user/:id', userController.getSingleUser);
    app.put('/update/:id', userController.updateUser);
    app.delete('/delete/:id', userController.deleteUser);

}