import LoggerService from "./services/logger.service";
import AppService from "./services/app.service";

/**
 * List of classes what you want to be autoInjectable.
 *
 * http://inversify.io
 */
export default [
  LoggerService,
  AppService
]
