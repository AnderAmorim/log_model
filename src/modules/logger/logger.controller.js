const LoggerService = require('./logger.service');

/**
 * import the logger method and create your log passing the necessary parameters
 *
 * @method logger
 * @type {Object}
 * @property {string} severity - Level of log (`fatal`, `error`, `warn`, `info`, `debug` or `silent`).
 * @property {number} application - Name of application.
 * @property {number} application_secondary - Name of the application that was consumed in the main application.
 * @property {number} className - Name of the class or function that is logging.
 * @property {number} type - Type of log (`request`, `response`, `create`, `update`, `delete`,
 * `query`, `http[name]`, `webhook[name]`, `queue[name]`)
 * @property {number} message - Log message. Open and descriptive text about the event..
 * @property {number} thread -  Thread of erro. For exemplo: `main`
 * @property {number} metadata - Request parameters. For example, customer ip, queue attributes, etc. These parameters will be added
 * to the `metadata` attribute of the resulting log.
 * @property {number} ip - IP of origin of the request. If passed, request location information is added to the `metadata`
 * return attribute.
 */
module.exports = ({ severity, application, application_secondary, className, type, message, thread, metadata, ip }) => {
  this.loggerService = new LoggerService({ props: { severity, application, application_secondary, className, type, message, thread, metadata, ip } });
  this.loggerService.logDispare();
};
