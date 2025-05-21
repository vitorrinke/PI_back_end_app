"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers/routers"));
const API = (0, express_1.default)();
API.use(express_1.default.urlencoded({ extended: false }));
API.use(express_1.default.json);
API.use('/', routers_1.default);
exports.default = API;
