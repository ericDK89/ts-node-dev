import { CategoriesRepository } from "../../repositories/implementations/categories.repository";
import { ListCategoriesController } from "./list.categories.controllers";
import { ListCategoriesUseCase } from "./list.categories.usecase";

const listCategoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(
  listCategoriesRepository
);
export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase
);
