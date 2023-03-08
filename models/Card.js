const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    name: String,
    kanji: String,
    sign: String,
    hierarchy: String,
    clowCardImg: String,
    sakuraCardImg: String
});

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;