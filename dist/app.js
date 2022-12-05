"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const Url_routes_1 = require("./routes/Url.routes");
app.use(express_1.default.json());
app.use('/u', Url_routes_1.UrlRouter);
app.get('/', (req, res) => {
    res.send('VIVEEEEEEEEEEE');
});
exports.default = app;