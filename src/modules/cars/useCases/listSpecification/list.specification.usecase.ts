import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/i.specification.repository";

export class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const allSpecifications = this.specificationRepository.listAll();
    return allSpecifications;
  }
}
