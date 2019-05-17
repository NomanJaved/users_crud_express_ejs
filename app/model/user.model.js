const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_name: String,    
    email : String,
    password: String,
    active: String,
    created_at : { type: Date, default: Date.now },
});

module.exports = mongoose.model('user', UserSchema);