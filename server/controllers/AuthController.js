// const User = require('../models/User')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const register = (req, res, next) => {
//     const { username, email, password } = req.body
//     const rounds = process.env.BCRYPT_ROUNDS || 10;
//     if (username && email && password) {
//         const salt = bcrypt.genSaltSync(parseInt(rounds));
//         const hash = bcrypt.hashSync(password, salt);
//         const user = new User({
//             username, 
//             email, 
//             password
//         })
//         console.log(user)
//         user.save()
//         res.status(201).json(user)
//     } else {
//         res.status(409).json({ error: "unrecognized field" }) 
//     }
//     res.status(500).json({ error: "something went wrong" })
//     // bcrypt.hash(req.body.password, 10, function(err, hashedPass){
//     //     if(err) {
//     //         res.json({
//     //             error: err
//     //         })
//     //     }
//     //     let user = new User ({
//     //         username: req.body.username,
//     //         email: req.body.email,
//     //         password: hashedPass
//     //     })
//     //     user.save()
//     //     .then(user => {
//     //         res.json({
//     //             message: 'User Added Successfully'
//     //         })
//     //     })
//     //     .catch(error => {
//     //         res.json({
//     //             message: 'An error occured!'
//     //         })
//     // })
// // })
// }

// const login = (req, res, next) => {
//     let username = req.body.username
//     let password = req.body.password
    
//     User.findOne({$or: [{email:username},{phone:username}]})
//     .then(user => {
//         if(user){
//             bcrypt.compare(password, user.password, function(err, result){
//                 if(err){
//                     res.json({
//                         error: err
//                     })
//                 }
//                 if(result){
//                     let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
//                     res.json({
//                         message: 'Login Successful',
//                         token
//                     })
//                 }else{
//                     res.json({
//                         message: 'Password does not match!'
//                     })
//                 }
//             })
//         }else{
//             res.json({
//                 message: 'No user found!'
//             })
//         }
//     })
// }

// module.exports = {
//     register,login
// }