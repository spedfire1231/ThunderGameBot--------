const mongo = require('mongoose')

module.exports = mongo.model(
    'Money',
    new mongo.Schema({
        id: String,
        userId: String,
        userBit: String,
        userVip: String,
        VIP: Number,
        coins: Number,
        bankcoins: Number,
        bitcoins: Number,
        job: String,
    })
)


/*module.exports = mongo.model(
    'Banks',
    new mongo.Schema({
        userId: String,
        bankcoins: Number,
    })
)*/