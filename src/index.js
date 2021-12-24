const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});

const schema = require('./schema')
const mongo = require('mongoose')

mongo.connect(process.env.MONGODB_URI || "mongodb+srv://thundergamebot:Sglorov1231@thundergbcluster.v6771.mongodb.net/thunder", {
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

client.on("ready", function() {
    client.user.setActivity(`ThunderBot | v 1.1`, {type: 'PLAYING'});
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

client.bankrob = (userBankRob) => new Promise(async ful =>{
    const data = await schema.findOne({userBankRob});
    if(!data) return ful(0);
    ful(data.bankrob);
})

client.robprog = (userRobProg) => new Promise(async ful =>{
    const data = await schema.findOne({userRobProg});
    if(!data) return ful(0);
    ful(data.robprog);
})

// Энергия

client.energy = (userEnergy) => new Promise(async ful =>{
    const data = await schema.findOne({userEnergy});
    if(!data) return ful(0);
    ful(data.energy);
})

client.addenergy = (userEnergy, energy) => {
    schema.findOne({userEnergy}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.energy += energy;
        } else {
            data = new schema({userEnergy, energy})
        }
        data.save();
    }) 
}

// Строительство

client.doski = (userDoski) => new Promise(async ful =>{
    const data = await schema.findOne({userDoski});
    if(!data) return ful(0);
    ful(data.doski);
})

client.kirp = (userKirp) => new Promise(async ful =>{
    const data = await schema.findOne({userKirp});
    if(!data) return ful(0);
    ful(data.kirp);
})

client.cem = (userCem) => new Promise(async ful =>{
    const data = await schema.findOne({userCem});
    if(!data) return ful(0);
    ful(data.cem);
})

client.bp = (userBp) => new Promise(async ful =>{
    const data = await schema.findOne({userBp});
    if(!data) return ful(0);
    ful(data.bp);
})

client.house = (userHouse) => new Promise(async ful =>{
    const data = await schema.findOne({userHouse});
    if(!data) return ful(0);
    ful(data.house);
})

client.addhouse = (userHouse, house) => {
    schema.findOne({userHouse}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.house = house;
        } else {
            data = new schema({userHouse, house})
        }
        data.save();
    })
}

client.health = (userHealth) => new Promise(async ful =>{
    const data = await schema.findOne({userHealth});
    if(!data) return ful(0);
    ful(data.health);
})

client.addhealth = (userHealth, health) => {
    schema.findOne({userHealth}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.health += health;
        } else {
            data = new schema({userHealth, health})
        }
        data.save();
    })
}

client.obezb = (userObezb) => new Promise(async ful =>{
    const data = await schema.findOne({userObezb});
    if(!data) return ful(0);
    ful(data.obezb);
})

client.addobezb = (userObezb, obezb) => {
    schema.findOne({userObezb}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.obezb += obezb;
        } else {
            data = new schema({userObezb, obezb})
        }
        data.save();
    })
}

client.tabl = (userTabl) => new Promise(async ful =>{
    const data = await schema.findOne({userTabl});
    if(!data) return ful(0);
    ful(data.tabl);
})

client.addtabl = (userTabl, tabl) => {
    schema.findOne({userTabl}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.tabl += tabl;
        } else {
            data = new schema({userTabl, tabl})
        }
        data.save();
    })
}

client.anti = (userAnti) => new Promise(async ful =>{
    const data = await schema.findOne({userAnti});
    if(!data) return ful(0);
    ful(data.anti);
})

client.addanti = (userAnti, anti) => {
    schema.findOne({userAnti}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.anti += anti;
        } else {
            data = new schema({userAnti, anti})
        }
        data.save();
    })
}


client.addbp = (userBp, bp) => {
    schema.findOne({userBp}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.bp += bp;
        } else {
            data = new schema({userBp, bp})
        }
        data.save();
    })
}

client.adddoski = (userDoski, doski) => {
    schema.findOne({userDoski}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.doski += doski;
        } else {
            data = new schema({userDoski, doski})
        }
        data.save();
    })
}

client.addkirp = (userKirp, kirp) => {
    schema.findOne({userKirp}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.kirp += kirp;
        } else {
            data = new schema({userKirp, kirp})
        }
        data.save();
        })
}

client.addcem = (userCem, cem) => {
    schema.findOne({userCem}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.cem += cem;
        } else {
            data = new schema({userCem, cem})
        }
        data.save();
        })
}


client.banacc = (userBannedacc) => new Promise(async ful =>{
    const data = await schema.findOne({userBannedacc});
    if(!data) return ful(0);
    ful(data.banacc);
})

// Ставка в казино

client.stavka = (userStavka) => new Promise(async ful =>{
    const data = await schema.findOne({userStavka});
    if(!data) return ful(0);
    ful(data.stavka);
})

client.addstavka = (userStavka, stavka) => {
    schema.findOne({userStavka}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.stavka += stavka;
        } else {
            data = new schema({userStavka, stavka})
        }
        data.save();
    }) 
}

// Блэк Джек

client.bd = (userBd) => new Promise(async ful =>{
    const data = await schema.findOne({userBd});
    if(!data) return ful(0);
    ful(data.bd);
})

client.addbd = (userBd, bd) => {
    schema.findOne({userBd}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.bd += bd;
        } else {
            data = new schema({userBd, bd})
        }
        data.save();
    }) 
}

client.reason = (userBanReason) => new Promise(async ful =>{
    const data = await schema.findOne({userBanReason});
    if(!data) return ful('Отсутствует!');
    ful(data.reasontoban);
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

client.curse = (userCurse) => new Promise(async ful =>{
    const data = await schema.findOne({userCurse});
    if(!data) return ful(0);
    ful(data.curse);
})

client.addcurse = (userCurse, curse) => {
    schema.findOne({userCurse}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.curse = curse;
        } else {
            data = new schema({userCurse, curse})
        }
        data.save();
    }) 
}

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

client.addbankrob = (userBankRob, bankrob) => {
    schema.findOne({userBankRob}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.bankrob = bankrob;
        } else {
            data = new schema({userBankRob, bankrob})
        }
        data.save();
    }) 
}

// авто
client.carcolor = (userCarcolor) => new Promise(async ful =>{
    const data = await schema.findOne({userCarcolor});
    if(!data) return ful(0);
    ful(data.carcolor);
})

client.addcarcolor = (userCarcolor, carcolor) => {
    schema.findOne({userCarcolor}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.carcolor = carcolor;
        } else {
            data = new schema({userCarcolor, carcolor})
        }
        data.save();
    }) 
}

client.car = (userCar) => new Promise(async ful =>{
    const data = await schema.findOne({userCar});
    if(!data) return ful(0);
    ful(data.car);
})

client.addcar = (userCar, car) => {
    schema.findOne({userCar}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.car = car;
        } else {
            data = new schema({userCar, car})
        }
        data.save();
    }) 
}

client.addrobprog = (userRobProg, robprog) => {
    schema.findOne({userRobProg}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.robprog += robprog;
        } else {
            data = new schema({userRobProg, robprog})
        }
        data.save();
    }) 
}


client.addbanacc = (userBannedacc, banacc) => {
    schema.findOne({userBannedacc}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.banacc = banacc;
        } else {
            data = new schema({userBannedacc, banacc})
        }
        data.save();
    }) 
}

client.addbanreasonacc = (userBanReason, reasontoban) => {
    schema.findOne({userBanReason}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.reasontoban = reasontoban;
        } else {
            data = new schema({userBanReason, reasontoban})
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

client.rmvbanacc = (userBannedacc, banacc) => {
    schema.findOne({userBannedacc}, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.banacc = banacc;
        } else {
            data = new schema({userBannedacc, banacc})
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