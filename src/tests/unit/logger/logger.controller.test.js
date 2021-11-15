const LoggerController = require('../../../modules/logger/logger.controller');
const LoggerService = require('../../../modules/logger/logger.service');
const { mockProprierties } = require('../../helpers/logger/fake-values');
jest.mock('../../../modules/logger/logger.service');
let mockProps;
let controllerLogger;
beforeAll(() => {
  mockProps = mockProprierties();
  controllerLogger = new LoggerController({ props: mockProps });
});

describe('LoggerController tests', () => {
  beforeEach(() => {
    jest.spyOn(controllerLogger.loggerService, 'logDispare').mockImplementation(async () => {});
  });
  it("must call the service's log method once", () => {
    controllerLogger.log();
    expect(controllerLogger.loggerService.logDispare).toBeCalledTimes(1);
  });
  it('the logger service must be created with the correct parameters', () => {
    controllerLogger.log();
    expect(LoggerService.mock.calls[0][0]).toEqual({ props: mockProps });
  });
});
