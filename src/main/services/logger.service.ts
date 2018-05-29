import {injectable} from "inversify";

/**
 * Logger class for beautiful logs <3.
 */
@injectable()
export default class LoggerService {
    constructor() {
    }
    
    debug(msg: string) {
        console.log('\x1b[36m%s\x1b[0m', msg);
    }
}
