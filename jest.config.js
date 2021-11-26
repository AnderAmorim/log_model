module.exports = {
  bail: true,
  clearMocks: true,
  coverageProvider: 'v8',
  projects: ['<rootDir>/src/tests/unit/unit-tests.config.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
};
