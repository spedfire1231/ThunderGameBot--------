const mongo = require('mongoose')

module.exports = mongo.model(
    'Money',
    new mongo.Schema({
        id: String,
        userId: String,
        userBit: String,
        userVip: String,
        userName: String,
        userJp: String,
        userBanned: String,
        BanReason: String,
        userJob: String,
        jobprogress: Number,
        userAdmin: String,
        userFerms: String,
        userReg: String,
        VIP: Number,
        coins: Number,
        bankcoins: Number,
        bitcoins: Number,
        reason: String,
        ban: Number,
        job: String,
        name: String,
        register: Number,
        ferms: Number,
        ADMIN: Number,
    })
)


/*module.exports = mongo.model(
    'Banks',
    new mongo.Schema({
        userId: String,
        bankcoins: Number,
    })
)*/