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
        
        const member = message.mentions.members.first() || message.member

        const vip = await client.vip(member.id)

        let user = message.author

        const bal = await client.bal(member.userId)

        const bank = await client.bank(member.id)

        const sum = bal + bank

        const embed = new MessageEmbed()

        .setTitle('Ваш Баланс:')
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.2')

        message.channel.send(embed);

    }
}