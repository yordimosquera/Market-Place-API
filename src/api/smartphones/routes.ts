import { Controller } from "./controllers";

export const Smartphone = {
  findSmartphones: {
    verb: "get",
    mountPoint: "/smartphones",
    handler: Controller.findSmartphones,
  },
  findSmartphone: {
    verb: "get",
    mountPoint: "/smartphones/:id",
    handler: Controller.findSmartphone,
  },
};
