const LoggerConfig = require('./logger-config');
const LoggerBuilder = require('./logger.builder');

class LoggerService {
  constructor({ props }) {
    this.props = props;
    this.loggerBuilder = new LoggerBuilder({ properties: props });
    this.logger = this.loggerBuilder.buildLogProperties();
    this.loggerConfig = new LoggerConfig();
  }

  async logDispare() {
    this.loggerConfig.log(this.logger.returnPropriertiesValues());
  }
}

module.exports = LoggerService;
