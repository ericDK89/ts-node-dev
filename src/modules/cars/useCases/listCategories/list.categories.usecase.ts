import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/i.categories.repository";

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}
