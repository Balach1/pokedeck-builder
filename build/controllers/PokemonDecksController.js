"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = __importDefault(require("mongoose"));
var Deck_1 = __importDefault(require("../models/Deck"));
mongoose_1.default.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
var router = express_1.Router();
router.post('/', function (req, res) {
    var body = req.body;
    // First get full card info for each `cardId`
    // Then save information back to DB
    var newDeck = new Deck_1.default(body);
    newDeck.save()
        .then(function () {
        res.send(newDeck);
    });
});
router.get('/:deckName', function (req, res) {
    Deck_1.default.findOne({ name: req.params.deckName })
        .then(function (deck) {
        res.send(deck);
    })
        .catch(function (error) {
        console.error(error);
    });
});
router.delete('/:deckName', function (req, res) {
    Deck_1.default.deleteOne({ name: req.params.deckName })
        .then(function () {
        res.send({});
    })
        .catch(function (error) {
        console.error(error);
    });
});
// Export the express.Router() instance to be used by server.ts
var PokemonDecksController = router;
exports.default = PokemonDecksController;
