import { AppServer } from "./server";
import { middlewareServer } from "./middlewares";
import { routesServer } from "./routes/";
import { Connection } from "./database/connection/";

export default class Server extends AppServer {
  constructor() {
    super();
    Connection.start();
    this.use(middlewareServer);
    this.mountRoutes(routesServer);
  }
  public static bootstrap(): Server {
    return new Server();
  }
}

Server.bootstrap().listen();
