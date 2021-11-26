const winston = require('winston');
var geoip = require('geoip-lite');
const {consts_winstown} = require('../constants/winstow-configs');
const { propriertiesValidation } = require('../validations/required_proprierties_validation');
/**
 * import the logger method and create your log passing the necessary parameters
 *
 * @method logger
 * @type {Object}
 * @property {number} application - Name of application.
 * @property {number} class_name - Name of the class or function that is logging.
 * @property {number} type - Type of log (`request`, `response`, `create`, `update`, `delete`,
 * `query`, `http[name]`, `webhook[name]`, `queue[name]`)
 * @property {number} message - Log message. Open and descriptive text about the event..
 * @property {number} trace - Complete message trace
 * @property {number} span - Primary trace of message or error
 * @property {number} thread -  Thread of erro. For exemple: `main`
 * @property {number} metadata (optional) - Request parameters. For example, customer ip, queue attributes, etc. These parameters will be added
 * to the `metadata` attribute of the resulting log.
 * @property {number} ip (optional) - IP of origin of the request. If passed, request location information is added to the `metadata`
 * return attribute.
 */

class NelsonRubens{

  constructor(){
    const logConfiguration = {
      levels: consts_winstown.levels,
      transports: [new winston.transports.Console()],
      format: winston.format.combine(winston.format.json()),
    };
    this.logger = winston.createLogger(logConfiguration);
  }

  automatic_infos(ip){
    const timestamp = new Date().toISOString();
    let dataInfo = {};
    if (ip) {
      dataInfo.ip = ip;
      var geo = geoip.lookup(ip);
      dataInfo.geo = geo;
    }
    return {
      timestamp,
      dataInfo,
    }
  }
  
  info({application, class_name, type, message, trace, span, thread, metadata, ip}){
    propriertiesValidation(arguments[0])
    const {timestamp, dataInfo} = this.automatic_infos(ip)
    this.logger.info({ severity:'info', application, class:class_name, type, message, timestamp, trace, span, thread, metadata: { ...dataInfo, ...metadata } })
  }
  fatal({application, class_name, type, errors_infos, trace, span, thread, metadata, ip}){
    propriertiesValidation(arguments[0], true)
    const {timestamp, dataInfo} = this.automatic_infos(ip)
    this.logger.fatal({ severity:'fatal', application, class:class_name, type, errors_infos, timestamp, trace, span, thread, metadata: { ...dataInfo, ...metadata } })
  }
  error({application, class_name, type, error_stack, trace, span, thread, metadata, ip}){
    propriertiesValidation(arguments[0], true)
    const {timestamp, dataInfo} = this.automatic_infos(ip)
    this.logger.error({ severity:'error', application, class:class_name, type, error_stack, timestamp, trace, span, thread, metadata: { ...dataInfo, ...metadata } })
  }
  warn({application, class_name, type, message, trace, span, thread, metadata, ip}){
    propriertiesValidation(arguments[0])
    const {timestamp, dataInfo} = this.automatic_infos(ip)
    this.logger.warn({ severity:'warn', application, class:class_name, type, message, timestamp, trace, span, thread, metadata: { ...dataInfo, ...metadata } })
  }
  debug({application, class_name, type, message, trace, span, thread, metadata, ip}){
    propriertiesValidation(arguments[0])
    const {timestamp, dataInfo} = this.automatic_infos(ip)
    this.logger.debug({ severity:'debug', application, class:class_name, type, message, timestamp, trace, span, thread, metadata: { ...dataInfo, ...metadata } })
  }
  silent({application, class_name, type, message, trace, span, thread, metadata, ip}){
  }
}

module.exports = NelsonRubens;
