const httpConstants = require('http2').constants;

class InvalidPropertyError extends Error {
  constructor({ message }) {
    super(message);
    this.name = 'InvalidPropertyError';
    this.status = httpConstants.HTTP_STATUS_BAD_REQUEST;
  }
}

module.exports = InvalidPropertyError;
