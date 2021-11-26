const { validValuesTypes } = require('../constants/valid-values-types');
const { RequiredPropertyError, InvalidPropertyError } = require('../errors');

module.exports = {
  propriertiesValidation(proprierties = {}, error = false) {
    const typeValidation = (type) => {
      const valid = validValuesTypes.filter((v) => type.indexOf(v) > -1);
      return valid.length > 0;
    };
    if (!proprierties.application) {
      throw new RequiredPropertyError({ message: 'application is required' });
    }
    if (!proprierties.class_name) {
      throw new RequiredPropertyError({ message: 'class_name is required' });
    }
    if (!proprierties.type) {
      throw new RequiredPropertyError({ message: 'type is required' });
    }
    
    if (!proprierties.thread) {
      throw new RequiredPropertyError({ message: 'thread is required' });
    }
    if (!typeValidation(proprierties.type)) {
      throw new InvalidPropertyError({ message: 'invalid value for type' });
    }
    if (!error && !proprierties.message) {
      throw new RequiredPropertyError({ message: 'message is required' });
    }
    if (error && !proprierties.errors_infos) {
      throw new RequiredPropertyError({ message: 'errors_infos is required' });
    }
  },
};
