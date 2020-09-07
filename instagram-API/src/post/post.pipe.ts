import { Response, Request, NextFunction } from "express";
class PostDTOPipe {

    public async validate(req: Request, res: Response, next: NextFunction): Promise<void> {

    }

}
export const postDTOPipe: PostDTOPipe = new PostDTOPipe();