import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./specification.routes";

export const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/specification", specificationRoutes);
