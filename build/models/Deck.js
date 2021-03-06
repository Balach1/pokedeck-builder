"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.default = mongoose_1.default.model('Decks', new mongoose_1.default.Schema({
    name: String,
    cards: [{
            id: String,
            name: String,
            imageUrl: String,
            types: [String],
        }],
    types: [String],
}));
