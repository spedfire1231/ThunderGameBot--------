const{ Client, Message, MessageEmbed } = require('discord.js')

const inventory = require('../../models/inventory')

module.exports = {
    name: 'баланс',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        inventory.findOne({
            Guild: message.guild.id,
            User: message.author.id,},
            async(err, dataInv) => {

                const member = message.mentions.members.first() || message.member;

                let user = message.author
        
                const bal = await client.bal(message.member.id)
        
                const bank = await client.bank(message.member.id)

                const sum = bal + bank

                const withoutinvent = new MessageEmbed()

                .setTitle('Ваш Баланс')
                .setColor('RANDOM')
                .setDescription(`В Вашем кошельке - **${bal}$**.\n На Вашем банковском счету - **${bank}$**\nОбщая сумма денежных средств - **${sum}$**`)
                .setTimestamp()
                .setThumbnail(user.displayAvatarURL({dynamic: true}))
                .setFooter('Версия - 0.1 BETA')

                if(!dataInv) return message.channel.send(withoutinvent)

                const mappedData = Object.keys(dataInv.Inventory)
                    .map((key) => {
                        return `${key}(${dataInv.Inventory[key]})`
            })
            .join(', ')

            const newbal = new MessageEmbed()

            .setTitle('Ваш Баланс')
            .setColor('RANDOM')
            .setDescription(`В Вашем кошельке - **${bal}$**.\n На Вашем банковском счету - **${bank}$**\n Ваше имущество - **${mappedData}**\n Общая сумма денежных средств - **${sum}$**`)
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL({dynamic: true}))
            .setFooter('Версия - 0.1 BETA')

            message.channel.send(newbal)
        })
    }
}