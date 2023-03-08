const express = require('express');
const connectDB = require('./config');
const cardController = require('./controller/cardsController');

const app = express();
const PORT = process.env.PORT || 4111
connectDB();


const router = express.Router();

router.get('/list', cardController.getAllCards);
router.get('/search', cardController.searchCard);
router.get('/:id', cardController.getCard);

router.get('/health', (req, resp) => resp.status(200))
app.use("/api/cards", router)

app.listen(PORT, console.info("Server will start for port: " + PORT));