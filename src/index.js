const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});

const schema = require('./schema')
const mongo = require('mongoose')

mongo.connect(process.env.MONGODB_URI || "mongodb+srv://thundergamebot:Sglorov1231@thundergbcluster.v6771.mongodb.net/test", {
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

client.name = (userName) => new Promise(async ful =>{
    const data = await schema.findOne({userName});
    if(!data) return ful('unnamed');
    ful(data.name);
})

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

client.vip = (userVip) => new Promise(async ful =>{
    const data = await schema.findOne({ userVip});
    if(!data) return ful(0);
    ful(data.VIP);
})

client.bitcoins = (userBit) => new Promise(async ful =>{
    const data = await schema.findOne({ userBit});
    if(!data) return ful(0);
    ful(data.bitcoins);
})

client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'основной')
    welcomeChannel.send (`Добро покажловать! Для того чтобы посмотреть помощь введите - **!помощь** . Желаем удачи! ${member}`)
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

client.addname = (userName, name) => {
    schema.findOne({ userName}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.name = name;
        } else {
            data = new schema({userName, name})
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

client.addbitcoins = (userBit, bitcoins) => {
    schema.findOne({ userBit}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.bitcoins += bitcoins;
        } else {
            data = new schema({userBit, bitcoins})
        }
        data.save();
    })
};

client.addVIP = (userVip, VIP) => {
    schema.findOne({ userVip}, async(err, data) => {
            if(err) throw err;
            if(data) {
                data.VIP += VIP;
                } else {
                    data = new schema({userVip, VIP})
                }
                data.save()
        })
};

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

client.rmvname = (userName, name) => {
    schema.findOne({ userName}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.name - name;
        } else {
            data = new schema({userName, name: -name})
        }
        data.save();
    }) 
}

client.rmvVIP = (userVip, VIP) => {
    schema.findOne({ userVip}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.VIP -= VIP;
        } else {
            data = new schema({userVip, VIP: -VIP})
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

client.rmvbitcoins = (userBit, bitcoins) => {
    schema.findOne({userBit}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.bitcoins -= bitcoins;
        } else {
            data = new schema({userBit, bitcoins: -bitcoins})
        }
        data.save();
    }) 
}

client.job = (id) => new Promise(async ful =>{
    const data = await schema.findOne({id});
    if(!data) return ful(0);
    ful(data.job);
})

client.login(config.token)

//client.login(process.env.token);