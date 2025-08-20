const UnauthenticatedError = require('./unauthenticated');
const CustomAPIError = require('./custom-api');
const BadRequestError = require('./bad-request');
const NotFoundError = require('./not-found');

module.exports = {
 UnauthenticatedError,
 CustomAPIError,
 BadRequestError,
 NotFoundError
}