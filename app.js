require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const gamesRouter = require('./routes/games');

app.use('/games', gamesRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
