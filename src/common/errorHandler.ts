import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        status: 'error',
        message: err.message,
    });
};

export const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).json({
        status: 'error',
        message: 'Not Found',
    });
};
