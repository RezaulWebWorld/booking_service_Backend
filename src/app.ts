import cors from "cors";
import { Request, Response } from "express";
import globalErrorHandeler from "./App/middleware/globalerrorhandeler";
import notFound from "./App/middleware/notFound";
import routes from "./App/routes";

const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.use("/", (req: Request, res: Response) => {
  res.send("Welcome To the Backend Server");
});

app.use(globalErrorHandeler);

app.use(notFound);

export default app;
