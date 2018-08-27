"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
exports.default = mongoose_1.default.model('Deck', new mongoose_1.Schema({
    name: String,
    cards: [{
            id: String,
            name: String,
            imageUrl: String,
            types: [String],
        }],
    types: [String],
}));
