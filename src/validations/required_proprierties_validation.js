const { validValuesTypes } = require('../constants/valid-values-types');

module.exports = {
  propriertiesValidation(proprierties = {}, error = false) {
    const typeValidation = (type) => {
      const valid = validValuesTypes.filter((v) => type.indexOf(v) > -1);
      return valid.length > 0;
    };

    if (!proprierties.application) {
      return;
    }

    if (!proprierties.class_name) {
      return;
    }

    if (!proprierties.type) {
      return;
    }

    if (!proprierties.thread) {
      return;
    }

    if (!typeValidation(proprierties.type)) {
      return;
    }

    if (!error && !proprierties.message) {
      return;
    }

    if (error && !proprierties.errors_infos) {
      return;
    }
  },
};
