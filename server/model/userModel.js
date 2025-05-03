const mongoose = require('mongoose');
const userSchema = require("../schemas/userSchemas")

const User = mongoose.model("projects", userSchema)

module.exports = User;