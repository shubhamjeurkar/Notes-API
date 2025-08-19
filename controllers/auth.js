const {StatusCodes} = require('http-status-codes');
const User = require('../models/user');

const register = async (req, res) => {
 const user = await User.create(req.body);
 const token = user.createJWT();
 res.status(StatusCodes.OK).json({user, token});
}

const login = async (req, res) => {
 const {email, password} = req.body;

 if(!email || !password) {
  res.status(StatusCodes.BAD_REQUEST).send('Please provide email and password');
 }

 const user = await User.findOne({email});

 if(!user) {
  res.status(StatusCodes.UNAUTHORIZED).send('Invalid Credentials');
 }

 const isPasswordCorrect = await user.comparePassword(password);

 if (!isPasswordCorrect) {
  res.status(StatusCodes.UNAUTHORIZED).send('Invalid Credentials');
 }

 const token = user.createJWT();

 res.status(StatusCodes.OK).json({user: {name: user.name}, token});
}

module.exports = {
 register,
 login
}