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

                const withoutall = new MessageEmbed()

                .setTitle('Профиль игрока:')
                .setColor('BLUE')
                .addField('**Имя:** ', user.username)
                .addField('**Кошелёк:** ', `${bal}$`)
                .addField('**Банковский счёт:** ', `${bank}$`)
                .addField('**Профессия: **', `Отсутствует!`)
                .setTimestamp()
                .setFooter('Версия - 0.2')
                .setThumbnail(user.displayAvatarURL({dynamic: true}))

                if(!dataJob) return message.channel.send(withoutall)

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
                        .addField('**Профессия: **', `${dataJob.Job}`)
                        .addField('**Имущество: **', `Отсутвутет!`)
                        .setTimestamp()
                        .setFooter('Версия - 0.2')
                        .setThumbnail(user.displayAvatarURL({dynamic: true}))

                        if(!dataInv) return message.channel.send(withoutinvent)

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
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
    
                    if(!dataJob) return message.channel.send(withoutall)

                    
                    const withoutjob = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Профессия: **', `Отсутствует!`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    if(!dataJob) return message.channel.send(withoutjob)

                    const page1 = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Профессия: **', `${dataJob.Job}`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .setTimestamp()
                    .setFooter('Версия - 0.2')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    message.channel.send(page1)

                    if(!dataInv) return message.channel.send(withoutinvent)
                })
        })
    }
}