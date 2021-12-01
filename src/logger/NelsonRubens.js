const { validTimezones } = require('../validations/valid_timezones');
const NelsonRubensService = require('./NelsonRubensService');
class NelsonRubens{
  constructor({timezone="America/Sao_Paulo"}={}){
    const timeZone = validTimezones(timezone)?timezone:'America/Sao_Paulo';
    this.timestamp = new Date().toLocaleString("pt-BR", {timeZone})
  }
  
  info({application, class_name, type, message, trace, span, thread, metadata, ip}){
    const service = new NelsonRubensService({severity:'info',application, timestamp:this.timestamp, class_name, type, message, trace, span, thread, metadata, ip})
    service.log()
  }
  fatal({application, class_name, type, errors_infos, trace, span, thread, metadata, ip}){
    const service = new NelsonRubensService({severity:'fatal',application, timestamp:this.timestamp, class_name, type, errors_infos, trace, span, thread, metadata, ip})
    service.log()
  }
  error({application, class_name, type, errors_infos, trace, span, thread, metadata, ip}){
    const service = new NelsonRubensService({severity:'error',application, timestamp:this.timestamp, class_name, type, errors_infos, trace, span, thread, metadata, ip})
    service.log()
  }
  warn({application, class_name, type, message, trace, span, thread, metadata, ip}){
    const service = new NelsonRubensService({severity:'warn',application, timestamp:this.timestamp, class_name, type, message, trace, span, thread, metadata, ip})
    service.log()
  }
  debug({application, class_name, type, message, trace, span, thread, metadata, ip}){
    const service = new NelsonRubensService({severity:'debug',application, timestamp:this.timestamp, class_name, type, message, trace, span, thread, metadata, ip})
    service.log()
  }
  silent({application, class_name, type, message, trace, span, thread, metadata, ip}){
  }
}

module.exports = NelsonRubens;
