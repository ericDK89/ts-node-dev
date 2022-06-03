import { CategoriesRepository } from "../../repositories/implementations/categories.repository";
import { ImportCategoryController } from "./import.category.controllers";
import { ImportCategoryUseCase } from "./import.category.usecase";

const importCategoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(
  importCategoriesRepository
);
export const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);
