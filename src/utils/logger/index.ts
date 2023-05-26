import winston, { Logger, createLogger, transports, format } from "winston";
const { combine, timestamp, label, printf } = format;
class LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
      transports: [new transports.Console()],
      format: combine(label({ label: "LOG" }), timestamp(), this.myFormat()),
    });
  }

  public info(message: string): void {
    this.logger.info(message);
  }

  public error(message: string): void {
    this.logger.error(message);
  }

  public warn(message: string): void {
    this.logger.warn(message);
  }

  private myFormat() {
    return printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}] ${level}: ${message}`;
    });
  }
}

export default LoggerService;
