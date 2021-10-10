const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});

const schema = require('./schema')
const mongo = require('mongoose')

mongo.connect(process.env.MONGODB_URI || "mongodb+srv://thundergamebot:Sglorov1231@thundergbcluster.v6771.mongodb.net/bot", {
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

client.ferm = (userFerms) => new Promise(async ful =>{
    const data = await schema.findOne({userFerms});
    if(!data) return ful(0);
    ful(data.ferms);
})

client.ban = (userBanned) => new Promise(async ful =>{
    const data = await schema.findOne({userBanned});
    if(!data) return ful(0);
    ful(data.ban);
})

client.reason = (BanReason) => new Promise(async ful =>{
    const data = await schema.findOne({BanReason});
    if(!data) return ful(0);
    ful(data.reason);
})


client.bal = (id) => new Promise(async ful =>{
    const data = await schema.findOne({id});
    if(!data) return ful(0);
    ful(data.coins);
})

client.reg = (userReg) => new Promise(async ful =>{
    const data = await schema.findOne({userReg});
    if(!data) return ful(0);
    ful(data.register);
})

client.bank = (userId) => new Promise(async ful =>{
    const data = await schema.findOne({userId});
    if(!data) return ful(0);
    ful(data.bankcoins);
})

client.admin = (userAdmin) => new Promise(async ful =>{
    const data = await schema.findOne({ userAdmin});
    if(!data) return ful(0);
    ful(data.ADMIN);
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


client.add = (id, coins) => {
    schema.findOne({id}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.coins += coins;
        } else {
            data = new schema({id, coins})
        }
        data.save();
    }) 
}

client.addferm = (userFerms, ferms) => {
    schema.findOne({ userFerms}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.ferms += ferms;
        } else {
            data = new schema({userFerms, ferms})
        }
        data.save();
    }) 
}


client.addban = (userBanned, ban) => {
    schema.findOne({userBanned}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.ban = ban;
        } else {
            data = new schema({userBanned, ban})
        }
        data.save();
    }) 
}

client.addbanreason = (BanReason, reason) => {
    schema.findOne({BanReason}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.reason = reason;
        } else {
            data = new schema({BanReason, reason})
        }
        data.save();
    }) 
}

client.addregister = (userReg, register) => {
    schema.findOne({ userReg}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.register = register;
        } else {
            data = new schema({userReg, register})
        }
        data.save();
    }) 
}

client.job = (userJob) => new Promise(async ful =>{
    const data = await schema.findOne({userJob});
    if(!data) return ful(0);
    ful(data.job);
})

client.jobprogress = (userJp) => new Promise(async ful =>{ 
    const data = await schema.findOne({userJp}); 
    if(!data) return ful(0); 
    ful(data.jobprogress); 
}) 
 
client.addjp = (userJp, jobprogress) => { 
    schema.findOne({userJp}, async(err, data) => { 
        if(err) throw err; 
        if(data) { 
            data.jobprogress += jobprogress; 
        } else { 
            data = new schema({userJp, jobprogress}) 
        } 
        data.save(); 
    })  
} 
 
client.addjob = (userJob, job) => { 
    schema.findOne({userJob}, async(err, data) => { 
        if(err) throw err; 
        if(data) { 
            data.job = job; 
        } else { 
            data = new schema({userJob, job}) 
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

client.addadmin = (userAdmin, ADMIN) => {
    schema.findOne({ userAdmin}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.ADMIN = ADMIN;
        } else {
            data = new schema({userAdmin, ADMIN})
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

client.rmv = (id, coins) => {
    schema.findOne({id}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.coins -= coins;
        } else {
            data = new schema({id, coins: -coins})
        }
        data.save();
    }) 
}

client.rmvferm = (userFerms, ferms) => {
    schema.findOne({ userFerms}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.ferms -= ferms;
        } else {
            data = new schema({userFerms, ferms: -ferms})
        }
        data.save();
    }) 
}

client.rmvban = (userBanned, ban) => {
    schema.findOne({ userBanned}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.ban = ban;
        } else {
            data = new schema({userBanned, ban: -ban})
        }
        data.save();
    }) 
}

client.rmvadmin = (userAdmin, ADMIN) => {
    schema.findOne({ userAdmin}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.ADMIN - ADMIN;
        } else {
            data = new schema({userAdmin, ADMIN: -ADMIN})
        }
        data.save();
    }) 
}

client.rmvregister = (userReg, register) => {
    schema.findOne({ userReg}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.register -= register;
        } else {
            data = new schema({userReg, register: -register})
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

client.login(config.token)

//client.login(process.env.token);