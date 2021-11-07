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
        userBannedacc: String,
        userStavka: String,
        userBankRob: String,
        userRobProg: String,
        userBanReason: String,
        userCurse: String,
        userJob: String,
        jobprogress: Number,
        userAdmin: String,
        userFerms: String,
        userEnergy: String,
        userReg: String,
        VIP: Number,
        coins: Number,
        bankcoins: Number,
        bitcoins: Number,
        stavka: Number,
        bankrob: Number,
        robprog: Number,
        reason: String,
        energy: Number,
        banacc: Number,
        curse: Number,
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