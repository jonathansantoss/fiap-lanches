import { Logger, createLogger } from "winston";
import { ILogger } from "./ILogger";

class LoggerImpl implements ILogger {

    public logger: Logger = createLogger();

    public info(msg: string) {
        this.logger.info(msg)
    }

    public error(msg: string) {
        this.logger.error(msg)
    }

    public warn(msg: string) {
        this.logger.warn(msg)
    }
}




export { LoggerImpl };
