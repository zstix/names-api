import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Name } from './name.entity';

export class NameController {
  private repo = getRepository(Name);

  async getAll(_req: Request, _res: Response): Promise<Name[]> {
    return this.repo.find();
  }

  async getOne(req: Request, _res: Response): Promise<Name | undefined> {
    return this.repo.findOne(req.params.id);
  }
}
