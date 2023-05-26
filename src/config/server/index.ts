import express, { Application } from "express";
import LoggerService from "@/utils/logger";
export class Server {
  private readonly app: Application;
  private readonly port: number;
  private readonly loggerService: LoggerService;
  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3001;
    this.loggerService = new LoggerService();
    this.start();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hello World!");
    });
  }

  start() {
    this.app.listen(this.port, () => {
      this.loggerService.info(`Server is running on port: ${this.port}`);
    });
  }
}
