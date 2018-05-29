import LoggerService from "./services/logger.service";
import AppService from "./services/app.service";

/**
 * List of classes what you want to be autoInjectable.
 *
 * Like angular DI.
 */
export default [
    LoggerService,
    AppService
]
