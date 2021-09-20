const mongo = require('mongoose')

module.exports = mongo.model(
    'Money',
    new mongo.Schema({
        id: String,
        userId: String,
        userBit: String,
        userVip: String,
        userName: String,
        userReg: String,
        VIP: Number,
        coins: Number,
        bankcoins: Number,
        bitcoins: Number,
        job: String,
        name: String,
        register: Number,
    })
)


/*module.exports = mongo.model(
    'Banks',
    new mongo.Schema({
        userId: String,
        bankcoins: Number,
    })
)*/