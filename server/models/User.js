// const { model, Schema } = require('mongoose');
// const userSchema = new Schema({
//     username: String,
//     password: String,
//     email: String
// });

// module.exports = model('User', userSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User