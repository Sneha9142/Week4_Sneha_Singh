import { Response } from 'express';

export const successResponse = (res: Response, message: string, data: any) => {
    res.status(200).json({
        status: 'success',
        message,
        data,
    });
};

export const errorResponse = (res: Response, message: string) => {
    res.status(500).json({
        status: 'error',
        message,
    });
};
