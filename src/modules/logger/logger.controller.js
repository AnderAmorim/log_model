const LoggerService = require('./logger.service');

/**
 * Create a logger passing the necessary parameters and call the
 * log method wherever you want your log to be called
 *
 * @class logger
 * @fires log
 * @param {Object} props
 * @param {string} props.severity (required) Log level. Possible options are: fatal, error, warn, info, debug or silent..
 *
 */
module.exports = ({ severity, application, application_secondary, className, type, message, thread, metadata, ip }) => {
  this.loggerService = new LoggerService({ props: { severity, application, application_secondary, className, type, message, thread, metadata, ip } });
  this.loggerService.logDispare();
};
