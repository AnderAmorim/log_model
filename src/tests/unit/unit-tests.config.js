const { resolve } = require('path');
const root = resolve(__dirname, '../../');
module.exports = {
  displayName: '[Unit Tests] - All',
  rootDir: root,
  coverageDirectory: '<rootDir>/coverage/unit/',
  testMatch: ['**/tests/unit/**/*.test.js'],
};
