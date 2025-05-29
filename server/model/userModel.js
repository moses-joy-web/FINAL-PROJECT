const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchemas');


const user = mongoose.model('polls', userSchema);


module.exports = user;