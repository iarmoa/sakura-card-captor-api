const express = require('express');
const connectDB = require('./config');
const cardController = require('./controller/cardsController');

const app = express();
const PORT = process.env.PORT || 4111
connectDB();


const router = express.Router();

router.get('/cards', cardController.getAllCards);
router.get('/search', cardController.searchCard);
app.use("/api", router)

app.listen(PORT, console.info("Server will start for port: " + PORT));