const { validTimezones } = require('../validations/valid_timezones');
const NelsonRubensService = require('./NelsonRubensService');
const Slack = require('../integrations/slack');

class NelsonRubens {
  constructor({ timezone = 'America/Sao_Paulo', application='unknown', className='unknown' } = {}) {
    this.timeZone = validTimezones(timezone) ? timezone : 'America/Sao_Paulo';

    this.application = application;
    this.className = className;
    this.service = new NelsonRubensService();
    this.slack = new Slack();
  }

  #isStatusTypeAvailable({ severity, message, errorsInfos }) {
    if (Object.keys(errorsInfos).length) {
      return ['fatal', 'error', 'warn'].includes(severity);
    }

    if (message.length) {
      return ['silent', 'debug', 'info', 'warn'].includes(severity);
    }
  }

  #generateTimestamp() {
    let tzoffset = (new Date()).getTimezoneOffset() * 60000;
    let localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);

    return localISOTime;
  }

  #cleanAuthorizationHeader({ metadata: { headers }}) {
    if (!headers) {
      return;
    }

    const props = {...headers};

    if ('authorization' in props) {
      delete props['authorization'];
    }

    if ('apikey' in props) {
      delete props['apikey'];
    }

    return props;
  }

  async #log({
    severity='debug',
    application,
    className,
    type,
    message='',
    data={},
    errorsInfos={},
    trace,
    span,
    thread,
    metadata={},
    ip,
    notify=false,
  }={}) {
    if (severity === 'silent') {
      severity = 'debug';
    }

    if (!this.#isStatusTypeAvailable({ severity, message, errorsInfos })) {
      console.log('[logger][WARN] Invalid status severity or message');
    }

    this.timestamp = this.#generateTimestamp();

    const handledMetadata = this.#cleanAuthorizationHeader({ metadata });

    if (!span) {
      span = `${this.application}-${this.className}-${this.timestamp}`;
    }

    if (!trace) {
      trace = `${this.application}-${this.className}-${this.timestamp}`;
    }

    const dataLog = {
      severity,
      application: application ? application : this.application,
      timestamp: this.timestamp,
      className: className ? className : this.className,
      type,
      message,
      data,
      errorsInfos,
      trace,
      span,
      thread,
      metadata: handledMetadata,
      thread,
      ip,
      notify,
    };

    this.service.log(dataLog);

    if (notify) {
      await this.slack.notify(dataLog);
    }
  }

  debug(hook) { this.#log({ severity: 'debug', ...hook}) };
  info(hook) { this.#log({ severity: 'info', ...hook}) };
  warn(hook) { this.#log({ severity: 'warn', ...hook}) };
  error(hook) { this.#log({ severity: 'error', ...hook}) };
  fatal(hook) { this.#log({ severity: 'fatal', ...hook}) };
  silent(hook) { this.#log({ severity: 'silent', ...hook}) };

}

module.exports = NelsonRubens;
