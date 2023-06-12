const router = require('express').Router();
let Game = require('../models/game.model');

// Retrieve all games
router.route('/').get((req, res) => {
  Game.find()
    .then(games => res.json(games))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Retrieve a specific game by id
router.route('/:id').get((req, res) => {
  Game.findById(req.params.id)
    .then(game => res.json(game))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new game
router.route('/add').post((req, res) => {
    router.route('/add').post((req, res) => {
        const newGame = new Game({
            player: req.body.player,
            deck: req.body.deck,
            dealerHand: req.body.dealerHand,
            playerHand: req.body.playerHand,
            isGameOver: req.body.isGameOver,
            playerWins: req.body.playerWins
            });
        
            newGame.save()
            .then(() => res.json('Game added!'))
            .catch(err => res.status(400).json('Error: ' + err));
        });
});

// Update a game
router.route('/update/:id').put((req, res) => {
    Game.findById(req.params.id)
        .then(game => {
            game.player = req.body.player;
            game.deck = req.body.deck;
            game.dealerHand = req.body.dealerHand;
            game.playerHand = req.body.playerHand;
            game.isGameOver = req.body.isGameOver;
            game.playerWins = req.body.playerWins;

            game.save()
                .then(() => res.json('Game updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


// Delete a game
router.route('/:id').delete((req, res) => {
  Game.findByIdAndDelete(req.params.id)
    .then(() => res.json('Game deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
