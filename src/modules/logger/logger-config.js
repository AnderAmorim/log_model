const winston = require('winston');
var geoip = require('geoip-lite');
class LoggerConfig {
  constructor() {
    const myCustomLevels = {
      levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
        silent: 6,
      },
      colors: {
        fatal: 'red',
        error: 'red',
        warn: 'yellow',
        info: 'blue',
        debug: 'white',
        silent: 'white',
      },
    };
    const logConfiguration = {
      levels: myCustomLevels.levels,
      transports: [new winston.transports.Console()],
      format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    };
    winston.addColors(myCustomLevels.colors);
    this.logger = winston.createLogger(logConfiguration);
  }
  log({ severity, application, aplication_secondary, className, type, message, thread, metadata, ip }) {
    const timestamp = new Date().toISOString();
    const span = `${application}-${timestamp}`;
    const add_secondary_trace = aplication_secondary ? `-${aplication_secondary}-${timestamp}` : '';
    const trace = `${span}${add_secondary_trace}`;
    let dataInfo = {};
    if (ip) {
      dataInfo.ip = ip;
      var geo = geoip.lookup(ip);
      dataInfo.geo = geo;
    }

    this.logger[severity]({ severity, application, className, type, message, timestamp, trace, span, thread, metadata: { ...dataInfo, ...metadata } });
  }
}

module.exports = LoggerConfig;
