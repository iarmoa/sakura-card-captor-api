const cardModel = require("../models/Card");

const getAllCards = async (req, res) => {
    try{
        const cards = await cardModel.find();
        res.json([...cards]);
    } catch (error){
        console.error(error);
        res.status(500).json({ message: "Internal server error"});
    }
}

const getCard = async (req, res) => {
    try{
        const id = req.params.id;
        const card = await cardModel.findById(id);

        if(card == null){
            res.status(201).json({ message: "Id not found" });
            return;
        }

        res.json(card);
    } catch (error){
        console.error(error);
        res.status(500).json({ message: "Internal server error"});
    }
}

const searchCard = async (req, res) => {
    const nameCriteria = req.query.q;
    if(!nameCriteria){
        res.status(400).json({ message: "Please provide a query criteria for search. Ex: q=jump" });
        return;
    }
    
    const criteria = new RegExp(`\\b\\w*${nameCriteria}\\w*\\b`, "i")
    const query = {
        name: {
            $regex: criteria
        }
    }

    results = await cardModel.find(query);
    if(!results.length){
        res.status(201).json({ message: "No cards found with that criteria"});
        return;
    }

    res.json(results);

}

module.exports = {
    getAllCards,
    searchCard,
    getCard
}