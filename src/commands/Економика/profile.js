const{ Client, Message, MessageEmbed } = require('discord.js')

const inventory = require('../../models/inventory')

const job = require('../../models/job')

module.exports = {
    name: 'профиль',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        job.findOne({
            Guild: message.guild.id,
            User: message.author.id,},
            async(err, dataJob) => {

                const member = message.mentions.members.first() || message.member;

                const regist = await client.reg(member.id)

                let user = message.author

                const bal = await client.bal(message.member.userId)
                const bank = await client.bank(message.member.id)
                const bit = await client.bitcoins(message.member.id)

                const embedreg1 = new MessageEmbed()

                .setTitle('Ошибка!')
                .setColor('RED')
                .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
                .setTimestamp()
                .setFooter('Версия - 0.4')
        
                if(regist === 0) return message.channel.send(embedreg1)

                inventory.findOne({
                    Guild: message.guild.id,
                    User: message.author.id,},
                    async(err, dataInv) => {

                        const withoutinvent = new MessageEmbed()

                        .setTitle('Профиль игрока:')
                        .setColor('BLUE')
                        .addField('**Имя:** ', user.username)
                        .addField('**Кошелёк:** ', `${bal}$`)
                        .addField('**Банковский счёт:** ', `${bank}$`)
                        .addField('**Биткоины:** ', `${bit} BTC`)
                        .addField('**Имущество: **', `Отсутвутет!`)
                        .setTimestamp()
                        .setFooter('Версия - 0.2')
                        .setThumbnail(user.displayAvatarURL({dynamic: true}))
    
                        if(!dataInv) return message.channel.send(withoutinvent)
    
                        const withoutinvent2 = new MessageEmbed()
    
                        .setTitle('Профиль игрока:')
                        .setColor('BLUE')
                        .addField('**Имя:** ', user.username)
                        .addField('**Кошелёк:** ', `${bal}$`)
                        .addField('**Банковский счёт:** ', `${bank}$`)
                        .addField('**Биткоины:** ', `${bit} BTC`)
                        .addField('**Имущество: **', `Отсутвутет!`)
                        .setTimestamp()
                        .setFooter('Версия - 0.2')
                        .setThumbnail(user.displayAvatarURL({dynamic: true}))
    
                        if(!dataInv) return message.channel.send(withoutinvent2)

                        const mappedData = Object.keys(dataInv.Inventory)
                            .map((key) => {
                                return `${key}(${dataInv.Inventory[key]})`
                    })
                    .join(', ')


                    const withoutall = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Биткоины:** ', `${bit} BTC`)
                    .addField('**Профессия: **', `Отсутствует!`)
                    .addField('**Имущество: **', `Отсутствует!`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
    
                    if(!dataJob && !dataInv) return message.channel.send(withoutall)

                  

                    
                    const withoutjob = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Биткоины:** ', `${bit} BTC`)
                    .addField('**Профессия: **', `Отсутствует!`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    if(!dataJob) return message.channel.send(withoutjob)

                    const withoutjob228 = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Биткоины:** ', `${bit} BTC`)
                    .addField('**Профессия: **', `Отсутствует!`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    if(!dataJob) return message.channel.send(withoutjob228)

                    const page1 = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Биткоины:** ', `${bit} BTC`)
                    .addField('**Профессия: **', `${dataJob.Job}`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    message.channel.send(page1)
                })
                
        })
    }
}