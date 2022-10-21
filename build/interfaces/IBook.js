"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookZodSchema = void 0;
const zod_1 = require("zod");
const bookZodSchema = zod_1.z.object({
    title: zod_1.z.string(),
    author: zod_1.z.string(),
});
exports.bookZodSchema = bookZodSchema;
