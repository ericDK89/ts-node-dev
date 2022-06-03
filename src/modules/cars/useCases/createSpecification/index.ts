import { SpecificationRepository } from "../../repositories/implementations/specification.repository";
import { CreateSpecificationController } from "./create.specification.controllers";
import { CreateSpecificationUseCase } from "./create.specification.usecase";

const createSpecificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  createSpecificationRepository
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
