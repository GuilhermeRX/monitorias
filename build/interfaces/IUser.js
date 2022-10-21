"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodSchema = void 0;
const zod_1 = require("zod");
const userZodSchema = zod_1.z.object({
    name: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.userZodSchema = userZodSchema;
