"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Sow extends sequelize_1.Model {
}
Sow.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.STRING,
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
    customerPONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    validFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    validUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_1.default,
    tableName: "Sow"
});
exports.default = Sow;
//# sourceMappingURL=payment.js.map