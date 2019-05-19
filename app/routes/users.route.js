module.exports = (app) => {

    const userController = require('../controller/users.controller');

    // Get create to show the view...!
    app.get('/create', userController.createUser);
    // POST create to save the data...!
    app.post('/create', userController.createUser);
    app.get('/users', userController.getUsers);
    app.get('/user/:id', userController.getSingleUser);

    // put is not working why?
    // app.put('/update/:id', userController.updateUser);
    app.post('/update/:id', userController.updateUser);

    // delete is not working why?
    // app.delete('/delete/:id', userController.deleteUser);
    app.get('/delete/:id', userController.deleteUser);

}