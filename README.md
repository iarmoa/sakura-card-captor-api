# Sakura Card Captor API

Endpoint: https://sakura-card-captor-api-production.up.railway.app/api/

|       HTTP METHOD            |               GET             |
|------------------------------|-------------------------------|
|       cards/list         |       List all the cards      |
|       cards/:id         |       Search by id            |
|       cards/search       |       Search by name          |

## api/cards/list
This call will return a list of objects as it follows:
* Example object:
```json
[
    {
        "_id": "6408da25b9ca57225b9b8efe",
        "name": "The Earthy",
        "kanji": "地",
        "sign": "Sun",
        "hierarchy": "N/A",
        "clowCardImg": "https://static.wikia.nocookie.net/ccs/images/7/72/ClowEarthy.jpg/revision/latest?cb=20220525093735",
        "sakuraCardImg": "https://static.wikia.nocookie.net/ccs/images/9/94/SakuraEarthy.jpg/revision/latest?cb=20160527123729"
    }
    ...
]
```

## api/cards/:id
If you know the id just send it to the url

## api/cards/search
You could make a search by name. The input could be an strign and the endpoint will return a list of elements that contains the "q" parameter
* Example with enpoint https://sakura-card-captor-api-production.up.railway.app/api/search?q=gh

```json
[
    {
        "_id": "6408da25b9ca57225b9b8f00",
        "name": "The Light",
        "kanji": "光",
        "sign": "Sun",
        "hierarchy": "N/A",
        "clowCardImg": "https://static.wikia.nocookie.net/ccs/images/6/66/ClowLight.jpg/revision/latest?cb=20220525094352",
        "sakuraCardImg": "https://static.wikia.nocookie.net/ccs/images/a/ad/SakuraLight.jpg/revision/latest?cb=20160606171359"
    },
    {
        "_id": "6408da25b9ca57225b9b8f11",
        "name": "The Fight",
        "kanji": "闘",
        "sign": "Sun",
        "hierarchy": "The Firey",
        "clowCardImg": "https://static.wikia.nocookie.net/ccs/images/1/16/ClowFight.jpg/revision/latest?cb=20220525093806",
        "sakuraCardImg": "https://static.wikia.nocookie.net/ccs/images/4/46/SakuraFight.jpg/revision/latest?cb=20160404163803"
    },
    {
        "_id": "6408da25b9ca57225b9b8f15",
        "name": "The Through",
        "kanji": "抜",
        "sign": "Sun",
        "hierarchy": "The Firey",
        "clowCardImg": "https://static.wikia.nocookie.net/ccs/images/d/d0/ClowThrough.jpg/revision/latest?cb=20220525095413",
        "sakuraCardImg": "https://static.wikia.nocookie.net/ccs/images/5/5a/SakuraThrough.jpg/revision/latest?cb=20160527123948"
    }
]
```

## Data structure

`_id`: Id of the card
`name`: Name impress on the card <br/>
`kanji`: Kanji impress on the card<br/>
`sign`: Which sign has domain over the card `Sun | Moon | Star`<br/>
`hierarchy`: Under which hierarchy of card `The Firey | The The Light | The Dark | The Earthy | The Watery | The Windy | Unknown`<br/>
`clowCardImg`: URL of clow card version<br/>
`sakuraCardImg`: URL of sakura card vesion<br/>

# Why this api?
Just for fun and learning reasons 

# Tech stack
- Express/NodeJS
- MongoDB
- Railway

Images from [Sakura Wiki Fandom](https://ccsakura.fandom.com/wiki/Cardcaptor_Sakura_Wiki)<br>
Inspiration project [JessVel/sakura-card-captor-api](https://github.com/JessVel/sakura-card-captor-api)