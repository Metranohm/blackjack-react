const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  // Define your game schema here
  // For instance: 
    playerHand: {type: Array, required: true},
    dealerHand: {type: Array, required: true},
    bet: {type: Number, required: true},
  // More fields as per your game logic
}, {
    timestamps: true,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
