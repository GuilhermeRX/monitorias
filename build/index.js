"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const zod_1 = require("zod");
const catalog_1 = require("./erros/catalog");
require("./Models/connection");
const bookRoute_1 = __importDefault(require("./routes/bookRoute"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/books', bookRoute_1.default);
app.use('/users', userRoute_1.default);
app.get('/', (req, res) => res.send('Hello World!'));
app.use((err, req, res, next) => {
    if (err instanceof zod_1.ZodError)
        return res.status(404).json({ message: err.issues });
    const mappedError = catalog_1.errorCatalog[err.message];
    if (mappedError) {
        const { httpStatus, message } = mappedError;
        return res.status(httpStatus).json({ message });
    }
    return res.status(500).json({ message: 'internal error' });
});
app.listen(port, () => console.log(`Escutando na porta ${port}!`));
