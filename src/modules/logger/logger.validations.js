module.exports = {
  propertiesValidation(proprierties = {}) {
    if (!proprierties.severity) {
      throw new Error('Severity is required');
    }
    if (!proprierties.application) {
      throw new Error('Application is required');
    }
    if (!proprierties.className) {
      throw new Error('ClassName is required');
    }
    if (!proprierties.type) {
      throw new Error('Type is required');
    }
    if (!proprierties.message) {
      throw new Error('Message is required');
    }
    if (!proprierties.thread) {
      throw new Error('thread is required');
    }
  },
};
