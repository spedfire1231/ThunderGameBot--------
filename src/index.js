const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});

const schema = require('./schema')
const mongo = require('mongoose')

mongo.connect(process.env.MONGODB_URI || "", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})


const path = require('path')
const fs = require('fs')
const config = require('./config.json');
module.exports = client;
client.commands = new Collection();
client.prefix = config.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('src/commands'));
["command"].forEach(handler => {
    require(path.resolve(`src/handlers/${handler}`))(client);
}); 

client.bal = (userId) => new Promise(async ful =>{
    const data = await schema.findOne({userId});
    if(!data) return ful(0);
    ful(data.coins);
})

client.bank = (userId) => new Promise(async ful =>{
    const data = await schema.findOne({userId});
    if(!data) return ful(0);
    ful(data.bankcoins);
})


client.add = (userId, coins) => {
    schema.findOne({ userId}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.coins += coins;
        } else {
            data = new schema({userId, coins})
        }
        data.save();
    }) 
}

client.addbank = (userId, bankcoins) => {
    schema.findOne({ userId}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.bankcoins += bankcoins;
        } else {
            data = new schema({userId, bankcoins})
        }
        data.save();
    }) 
}

client.rmv = (userId, coins) => {
    schema.findOne({ userId}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.coins -= coins;
        } else {
            data = new schema({userId, coins: -coins})
        }
        data.save();
    }) 
}

client.rmvbank = (userId, bankcoins) => {
    schema.findOne({ userId}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.bankcoins -= bankcoins;
        } else {
            data = new schema({userId, bankcoins: -bankcoins})
        }
        data.save();
    }) 
}

client.login(config.token)

//client.login(process.env.token);