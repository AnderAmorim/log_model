const { when } = require('jest-when');
const LoggerBuilder = require('../../../modules/logger/logger.builder');
const Logger = require('../../../modules/logger/logger.model');
const LoggerService = require('../../../modules/logger/logger.service');
const { mockProprierties } = require('../../helpers/logger/fake-values');

jest.mock('../../../modules/logger/logger.builder');
let mockProps;
let serviceLogger;
let classLogger;
beforeAll(() => {
  mockProps = mockProprierties();
  classLogger = new Logger({ ...mockProps });
  serviceLogger = new LoggerService({ props: mockProps });
});

describe('LoggerService tests', () => {
  beforeEach(() => {
    when(LoggerBuilder.prototype.buildLogProperties).mockReturnValue(classLogger);
  });
  it('must create an instance of LoggerBuilder with the correct parameters', () => {
    expect(LoggerBuilder.mock.calls.length).toBe(1);
    expect(LoggerBuilder.mock.calls[0][0]).toEqual({ properties: mockProps });
  });
  it('must call LoggerBuilders buildLogProperties method once', () => {
    jest.spyOn(serviceLogger.loggerBuilder, 'buildLogProperties');
    expect(serviceLogger.loggerBuilder.buildLogProperties).toBeCalledTimes(1);
  });
});
