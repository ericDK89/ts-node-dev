import { CategoriesRepository } from "../../repositories/implementations/categories.repository";
import { CreateCategoryController } from "./create.category.controllers";
import { CreateCategoryUseCase } from "./create.category.usecase";

const categoryRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
