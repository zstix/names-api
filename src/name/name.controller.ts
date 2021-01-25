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
  async (req: Request, res: Response): Promise<void>  => {
    const id = parseInt(req.params.id, 10);
    const repository = conn.getRepository(Name);
    const data = await repository.findOne(id);
    res.json(data);
  }

export default {
  getAll,
  getOne
};
