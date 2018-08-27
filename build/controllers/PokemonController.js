"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
});
// Export the express.Router() instance to be used by server.ts
var PokemonController = router;
exports.default = PokemonController;
