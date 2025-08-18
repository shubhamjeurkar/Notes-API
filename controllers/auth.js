const {StatusCodes} = require('http-status-codes');

const register = async (req, res) => {
 res.status(StatusCodes.OK).json(req.body);
}

const login = async (req, res) => {
 res.status(StatusCodes.OK).json(req.body);
}

module.exports = {
 register,
 login
}