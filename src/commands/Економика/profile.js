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

                let user = message.author

                const bal = await client.bal(message.member.userId)
                const bank = await client.bank(message.member.id)
                const job = await client.job(message.member.id)
                const vip = await client.vip(message.member.id)

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
                        .addField('**Имущество: **', `Отсутвутет!`)
                        .addField('**VIP**', `Отсутствует!`)
                        .setTimestamp()
                        .setFooter('Версия - 0.2')
                        .setThumbnail(user.displayAvatarURL({dynamic: true}))
    
                        if(!dataInv && vip == 0) return message.channel.send(withoutinvent)
    
                        const withoutinvent2 = new MessageEmbed()
    
                        .setTitle('Профиль игрока:')
                        .setColor('BLUE')
                        .addField('**Имя:** ', user.username)
                        .addField('**Кошелёк:** ', `${bal}$`)
                        .addField('**Банковский счёт:** ', `${bank}$`)
                        .addField('**Имущество: **', `Отсутвутет!`)
                        .addField('**VIP**', `Имеется`)
                        .setTimestamp()
                        .setFooter('Версия - 0.2')
                        .setThumbnail(user.displayAvatarURL({dynamic: true}))
    
                        if(!dataInv && vip == 1) return message.channel.send(withoutinvent2)

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
                    .addField('**Профессия: **', `Отсутствует!`)
                    .addField('**Имущество: **', `Отсутствует!`)
                    .addField('**VIP**', `Отсутствует`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
    
                    if(!dataJob && vip == 0 && !dataInv) return message.channel.send(withoutall)

                  

                    
                    const withoutjob = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Профессия: **', `Отсутствует!`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .addField('**VIP**', `Отсутствует`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    if(!dataJob && !vip == 0) return message.channel.send(withoutjob)

                    const withoutjob228 = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Профессия: **', `Отсутствует!`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .addField('**VIP**', `Имеется`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    if(!dataJob && !vip == 1) return message.channel.send(withoutjob228)

                    const page1 = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Профессия: **', `${dataJob.Job}`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .addField('**VIP**', `Имеется`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    if(vip == 1) return message.channel.send(page1)

                    const page2 = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Профессия: **', `${dataJob.Job}`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .addField('**VIP**', `Отсутствует!`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    if(vip == 0) return message.channel.send(page2)
                })
                
        })
    }
}