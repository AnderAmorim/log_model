const geoip = require('geoip-lite');
const winston = require('winston');
const { consts_winstown: { levels } } = require('../constants/winstow-configs');

class NelsonRubensService {
  automaticInfos({ ip }) {
    const dataInfo = {};

    if (ip) {
      dataInfo.ip = ip;
      dataInfo.geo = geoip.lookup(ip);
    }

    return {
      dataInfo,
    }
  }

  constructor() {
    const logConfiguration = {
      levels: levels,
      transports: [new winston.transports.Console()],
      format: winston.format.combine(winston.format.json()),
    };

    this.logger = winston.createLogger(logConfiguration);
  }

  log({
    severity,
    application,
    timestamp,
    className,
    method,
    type,
    message,
    data,
    trace,
    span,
    thread,
    metadata={},
    errorsInfos,
    ip
  }){
  const { dataInfo } = this.automaticInfos({ip});
    const logContent = {
      application,
      timestamp,
      className,
      type,
      trace,
      span,
      data,
      metadata:{ ...dataInfo, ...metadata },
    }

    if (message) {
      logContent.message = message;
    }

    if(method) {
      logContent.method = method
    }

    if (Object.keys(errorsInfos).length) {
      logContent.errorsInfos = errorsInfos;
    }

    if (thread) {
      logContent.thread = thread;
    }
    this.logger[severity](logContent);
  }
}

module.exports = NelsonRubensService;