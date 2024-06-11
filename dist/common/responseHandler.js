"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = exports.successResponse = void 0;
const successResponse = (res, message, data) => {
    res.status(200).json({
        status: 'success',
        message,
        data,
    });
};
exports.successResponse = successResponse;
const errorResponse = (res, message) => {
    res.status(500).json({
        status: 'error',
        message,
    });
};
exports.errorResponse = errorResponse;
//# sourceMappingURL=responseHandler.js.map