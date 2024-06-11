"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const organizationRoutes_1 = __importDefault(require("./organizationRoutes"));
const customerRoutes_1 = __importDefault(require("./customerRoutes"));
const sowRoutes_1 = __importDefault(require("./sowRoutes"));
const invoiceRoutes_1 = __importDefault(require("./invoiceRoutes"));
const paymentRoutes_1 = __importDefault(require("./paymentRoutes"));
const router = (0, express_1.Router)();
router.use('/organizations', organizationRoutes_1.default);
router.use('/customers', customerRoutes_1.default);
router.use('/sows', sowRoutes_1.default);
router.use('/invoices', invoiceRoutes_1.default);
router.use('/payments', paymentRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map