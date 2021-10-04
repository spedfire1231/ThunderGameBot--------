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
        userJob: String,
        jobprogress: Number,
        userAdmin: String,
        userAdminpass: String,
        userFerms: String,
        userReg: String,
        VIP: Number,
        coins: Number,
        bankcoins: Number,
        bitcoins: Number,
        job: String,
        name: String,
        register: Number,
        ferms: Number,
        ADMIN: Number,
        ADMINPASS: Number,
        alogin: Number,
    })
)


/*module.exports = mongo.model(
    'Banks',
    new mongo.Schema({
        userId: String,
        bankcoins: Number,
    })
)*/