import express from "express";
import swaggerUi from "swagger-ui-express";
import { routes } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
const port = 3333;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(routes);

app.listen(port, () => console.log(`Serving on port ${port}`));
