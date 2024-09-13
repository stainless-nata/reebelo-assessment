"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_PASSWORD = exports.DATABASE_USER = exports.DATABASE_PORT = exports.DATABASE_HOST = exports.DATABASE_NAME = exports.DB = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.DB = process.env.DB;
exports.DATABASE_NAME = process.env.DATABASE_NAME;
exports.DATABASE_HOST = process.env.DATABASE_HOST;
exports.DATABASE_PORT = process.env.DATABASE_PORT;
exports.DATABASE_USER = process.env.DATABASE_USER;
exports.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
//# sourceMappingURL=env.js.map