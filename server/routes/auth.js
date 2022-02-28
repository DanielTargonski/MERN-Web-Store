const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
var cors = require('cors')

function createToken (user) {
  const jwtSecret = process.env.JWT_SECRET || 'jwtsecret123'
  const payload = {
      sub: user.username
  }
  
  const options = {
      expiresIn: '30d'
  }
  
  return jwt.sign(payload, jwtSecret, options)
}


var whitelist = ['http://localhost:3000'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  }
};


// router.post('/register',cors(corsOptions), AuthController.register)
router.post('/register', cors(corsOptions), (req, res, next) => {
  const { username, email, password } = req.body
  const rounds = process.env.BCRYPT_ROUNDS || 10;
  console.log("body",req.body)
  if (username && email && password) {
      const salt = bcrypt.genSaltSync(parseInt(rounds));
      const hash = bcrypt.hashSync(password, salt);
      const user = new User({
          username, 
          email, 
          password: hash
      })
      console.log(user)
      user.save()
      res.status(201).json(user)
      
  } else {
      res.status(409).json({ error: "unrecognized field" }) 
  }
})

router.post('/login', cors(corsOptions), async (req, res, next) => {
  try {
      const { username, password } = req.body
      if (username && password) {
          const user = await User.find({ username });
          const comparePassword = bcrypt.compare(password, user[0].password);
          if (await comparePassword) {
              const token = createToken(user)
              res.status(200).json(token);
          } else {
              res.status(401).json({ error: 'mismatched passwords' });
          }
      } else {
          res.status(409).json({ error: 'unrecognized fields' })
      }
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'something went wrong' })
  }
});


module.exports = router