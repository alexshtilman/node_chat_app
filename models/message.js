var mongoose = require('mongoose')
const userSchema = {
    name: String,
    message: String
};
const Message = mongoose.model('Message', userSchema);

module.exports = Message;