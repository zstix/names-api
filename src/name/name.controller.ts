import { Connection } from 'typeorm';
import { Request, Response } from 'express';
import { Names as Name } from './name.entity';

const getAll = (conn: Connection) =>
  async (_req: Request, res: Response): Promise<void> => {
    const repository = conn.getRepository(Name);
    const data = await repository.find();
    res.json(data);
  };

const getOne = (conn: Connection) =>
  async (req: Request, _res: Response): Promise<Name | undefined>  => {
    const repository = conn.getRepository(Name);
    return await repository.findOne(req.params.id);
  }

export default {
  getAll,
  getOne
};
