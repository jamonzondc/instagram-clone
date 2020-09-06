import { Response, Request, NextFunction } from "express";

class ErrorHandler {
    error(err: Error, req: Request, res: Response, next: NextFunction): void {
        console.error(err);
        res.status(500).json({ err });
    }
}
export const errorHandler: ErrorHandler = new ErrorHandler();