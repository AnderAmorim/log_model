const Logger = require('./logger.model');
const { propertiesValidation } = require('./logger.validations');

class LoggerBuilder {
  constructor({ properties }) {
    this.properties = properties;
  }

  buildLogProperties() {
    propertiesValidation(this.properties);
    return new Logger({
      severity: this.properties.severity,
      application: this.properties.application,
      application_secondary: this.properties.application_secondary,
      className: this.properties.className,
      type: this.properties.type,
      message: this.properties.message,
      thread: this.properties.thread,
      metadata: this.properties.metadata,
      ip: this.properties.ip,
    });
  }
}

module.exports = LoggerBuilder;
