import { Request, Response } from "express";
import { Services } from "./services";

export const Controller = {
  findSmartphones: async (req: Request, res: Response) => {
    const data = await Services.findSmartphones(req.query);
    res.send({ data });
  },
  findSmartphone: async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await Services.findSmartphone(id);
    res.send({ data });
  },
};
