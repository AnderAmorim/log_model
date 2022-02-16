class ApiIntegrationException extends Error {
  constructor({ message, platform }) {
    super({ message });
    this.name = 'ApiIntegrationException';
    this.platform = platform;
  }
}

module.exports = ApiIntegrationException;
