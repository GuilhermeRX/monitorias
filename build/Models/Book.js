"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MongoModel_1 = __importDefault(require("./MongoModel"));
const bookMongooseSchema = new mongoose_1.Schema({
    title: String,
    author: String,
});
class Book extends MongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('books', bookMongooseSchema)) {
        super(model);
    }
}
exports.default = Book;
