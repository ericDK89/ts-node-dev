import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./list.specification.usecase";

export class ListSpecificationControllers {
  constructor(private listSpecificationControllers: ListSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    const allSpecifications = this.listSpecificationControllers.execute();

    if (allSpecifications.length === 0) {
      return res.status(204).send();
    }
    return res.json({ all_specifications: allSpecifications });
  }
}
