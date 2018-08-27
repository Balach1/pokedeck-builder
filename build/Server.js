"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv-safe').config();
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var PokemonDecksController_1 = __importDefault(require("./controllers/PokemonDecksController"));
// Create a new express application instance
var app = express_1.default();
// The port the express app will listen on
var port = parseInt(process.env.PORT) || 3000;
// Add the `body-parser` middleware
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Mount the WelcomeController at the /welcome route
app.use('/decks', PokemonDecksController_1.default);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
