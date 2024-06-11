"use strict";
// import app from './app';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// //const PORT = process.env.PORT || 3000;
// const PORT=3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const organization_1 = __importDefault(require("../src/models/organization"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.json());
// Endpoint to create an organization
app.post('/api/organizations', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const org = yield organization_1.default.create(req.body);
        res.status(201).json(org);
    }
    catch (error) {
        next(error);
    }
}));
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: err.message,
        stack: err.stack,
    });
});
// Sync database and start server
database_1.default.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
//# sourceMappingURL=server.js.map