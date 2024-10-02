import cors from "cors";
import globalErrorHandeler from "./App/middleware/globalerrorhandeler";
import notFound from "./App/middleware/notFound";
import routes from "./App/routes";
import { welcome } from "./App/utils/welcome";

const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.use("/", welcome);

app.use(globalErrorHandeler);

app.use(notFound);

export default app;
