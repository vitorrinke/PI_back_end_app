"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers/routers"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const dotenv_1 = __importDefault(require("dotenv"));
//import API from './api'
const API = (0, express_1.default)();
API.use(express_1.default.urlencoded({ extended: false }));
API.use(express_1.default.json);
API.use('/', routers_1.default);
dotenv_1.default.config();
const PORT = process.env.PORT;
const OPTIONS = {
    key: fs_1.default.readFileSync('server.key'),
    cert: fs_1.default.readFileSync('server.cert')
};
https_1.default.createServer(OPTIONS, API).listen(PORT, () => {
    console.log('server running', PORT);
});
