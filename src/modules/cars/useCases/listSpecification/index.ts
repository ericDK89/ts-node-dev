import { SpecificationRepository } from "../../repositories/implementations/specification.repository";
import { ListSpecificationControllers } from "./list.specification.controllers";
import { ListSpecificationUseCase } from "./list.specification.usecase";

const listSpecificationRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
  listSpecificationRepository
);
export const listSpecificationControllers = new ListSpecificationControllers(
  listSpecificationUseCase
);
