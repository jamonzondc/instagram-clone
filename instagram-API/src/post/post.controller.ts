import { Response, Request, NextFunction } from "express";


class PostController {

    public async save(req: Request, res: Response, next: NextFunction): Promise<void> {

    }
    public async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.status(200).json({ data: 'OK' });
    }
}
export const postController: PostController = new PostController();