import cors from "cors";
import bodyParser from "body-parser";

export const middlewareServer: { [index: string]: any } = {
  cors: {
    mountPoint: "",
    handler: cors(),
  },
  urlencodedParser: {
    mountPoint: "",
    handler: bodyParser.urlencoded({ extended: false }),
  },
  jsonParser: {
    mountPoint: "",
    handler: bodyParser.json(),
  },
};
