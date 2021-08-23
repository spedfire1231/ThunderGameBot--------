const{ Client, Message, MessageEmbed } = require('discord.js')

const inventory = require('../../models/inventory')

const job = require('../../models/job')

module.exports = {
    name: 'profile',
    aliases: ['профиль'],

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
                if(!dataJob) return message.channel.send('У Вас нет работы!')

                const member = message.mentions.members.first() || message.member;

                let user = message.author

                const bal = await client.bal(message.member.id)
                const bank = await client.bank(message.member.id)
                const job = await client.job(message.member.id)

                inventory.findOne({
                    Guild: message.guild.id,
                    User: message.author.id,},
                    async(err, dataInv) => {
                        if(!dataInv) return message.channel.send('У Вас пустой инвентарь!')
                        const mappedData = Object.keys(dataInv.Inventory)
                            .map((key) => {
                                return `${key}(${dataInv.Inventory[key]})`
                    })
                    .join(', ')

                    const page1 = new MessageEmbed()

                    .setTitle('Профиль игрока:')
                    .setColor('BLUE')
                    .addField('**Имя:** ', user.username)
                    .addField('**Кошелёк:** ', `${bal}$`)
                    .addField('**Банковский счёт:** ', `${bank}$`)
                    .addField('**Профессия: **', `${dataJob.Job}`)
                    .addField('**Имущество: **', `${mappedData}`)
                    .setTimestamp()
                    .setFooter('Версия - 0.1 BETA')
                    .setThumbnail(user.displayAvatarURL({dynamic: true}))
            
                    message.channel.send(page1)
                })
        })
    }
}