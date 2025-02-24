import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from 'express';
import routes from './routes';
import Logger from './config/logger';
import morgan from 'morgan';

class App {
  public app: Application;
  public host: string | number;
  public port: string | number;
  public api_version: string | number;
 
  private logStream = Logger.logStream;
  private logger = Logger.logger;
 
  public server:any;

  constructor() {
    this.app = express();
    this.host = `${process.env.APP_HOST}`;
    this.port = `${process.env.APP_PORT}`;
    this.api_version = `${process.env.API_VERSION}`;

    this.initializeRoutes();   
  }

    public initializeMiddleWares(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(morgan('combined', { stream: this.logStream }));
  }

  public initializeRoutes(): void {
    this.app.use(`/api/${this.api_version}`, routes());
  }


  public startApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.server = this.app.listen(this.port, () => {
        this.logger.info(
          `Server started at ${this.host}:${this.port}/api/${this.api_version}/`
        );
        resolve(this.server);
      }).on('error', reject);
    });
  }

  public getApp(): Application {
    return this.app;
  }
}

const app = new App();
export default app;


if (require.main === module) {
  app.startApp().then((server) => {
    console.log('Server started:', server.address())
  }).catch((err) => {
    console.error('Error starting server:', err);
  });
}
