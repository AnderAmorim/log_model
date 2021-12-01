const winston = require('winston');
const {consts_winstown} = require('../constants/winstow-configs');
var geoip = require('geoip-lite');

class NelsonRubensService{
  automaticInfos({ip}){
    let dataInfo = {};
    if (ip) {
      dataInfo.ip = ip;
      var geo = geoip.lookup(ip);
      dataInfo.geo = geo;
    }
    return {
      dataInfo,
    }
  }
  constructor({severity, application, timestamp, class_name, type, message, trace, span, thread, metadata, errors_infos, ip}){
    const logConfiguration = {
      levels: consts_winstown.levels,
      transports: [new winston.transports.Console()],
      format: winston.format.combine(winston.format.json()),
    };
    this.logger = winston.createLogger(logConfiguration);
    const {dataInfo} = this.automaticInfos({ip});
    this.severity = severity;
    this.props = {
      application,
      timestamp,
      class_name,
      type,
      errors_infos,
      trace,
      span,
      thread,
      metadata:{ ...dataInfo, ...metadata },
    }
    if(message){
      this.props.message = message
    }
    if(errors_infos){
      this.props.errors_infos = errors_infos
    }
  }
  log(){
    this.logger[this.severity](this.props);
  }
}

module.exports = NelsonRubensService;