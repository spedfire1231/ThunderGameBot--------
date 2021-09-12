<<<<<<< HEAD
const mongo = require('mongoose')

module.exports = mongo.model(
    'Money',
    new mongo.Schema({
        id: String,
        userId: String,
        userBit: String,
        userVip: String,
        userName: String,
        VIP: Number,
        coins: Number,
        bankcoins: Number,
        bitcoins: Number,
        job: String,
        name: String,
    })
)


/*module.exports = mongo.model(
    'Banks',
    new mongo.Schema({
        userId: String,
        bankcoins: Number,
    })
=======
const mongo = require('mongoose')

module.exports = mongo.model(
    'Money',
    new mongo.Schema({
        id: String,
        userId: String,
        userBit: String,
        userVip: String,
        userName: String,
        VIP: Number,
        coins: Number,
        bankcoins: Number,
        bitcoins: Number,
        job: String,
        name: String,
    })
)


/*module.exports = mongo.model(
    'Banks',
    new mongo.Schema({
        userId: String,
        bankcoins: Number,
    })
>>>>>>> 2b8e3f798a5b038a5b162c1bb2c6a5be5a0f6433
)*/