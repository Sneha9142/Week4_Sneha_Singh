"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Invoice extends sequelize_1.Model {
}
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true
    },
    totalInvoiceValue: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    sowId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Sow",
            key: "id"
        }
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    invoiceSentOn: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    customerId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: "Customer",
            key: "id"
        }
    },
    paymentReceivedOn: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    invoiceVersionNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_1.default,
    modelName: "Invoice"
});
exports.default = Invoice;
//# sourceMappingURL=invoice.js.map