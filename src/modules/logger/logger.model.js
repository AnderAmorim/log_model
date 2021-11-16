class Logger {
  constructor({ severity, application, application_secondary, className, type, data, message, thread, metadata, ip }) {
    this.severity = severity;
    this.application = application;
    this.application_secondary = application_secondary;
    this.className = className;
    this.type = type;
    this.message = message;
    this.thread = thread;
    this.metadata = metadata;
    this.ip = ip;
  }

  returnPropriertiesValues() {
    const { severity, application, application_secondary, className, type, message, thread, metadata, ip } = this;
    return { severity, application, application_secondary, class: className, type, message, thread, metadata, ip };
  }
}

module.exports = Logger;
