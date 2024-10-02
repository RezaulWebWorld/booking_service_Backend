import { Request, Response } from "express";

export const welcome = (req: Request, res: Response) => {
  res.send(" WELCOME TO THE MRBSC BACKEND");
};
