"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRouter = void 0;
const express_1 = require("express");
const Url_repo_1 = require("../repository/Url.repo");
exports.TodoRouter = (0, express_1.Router)();
exports.TodoRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const largeUrl = req.body.description;
    if (!largeUrl) {
        res.status(400);
        return res.send({
            message: 'No description'
        });
    }
    // Si tengo mi description
    // Debo crear un nuevo TODO y guardarlo a la DB
    const newUrlId = yield (0, Url_repo_1.createUrl)(largeUrl);
    res.status(201);
    res.send({
        id: newUrlId
    });
}));
