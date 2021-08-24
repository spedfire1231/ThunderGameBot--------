const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'баланс',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member;

        let user = message.author


        const bal = await client.bal(message.member.id)

        const bank = await client.bank(message.member.id)
        
        const embed = new MessageEmbed()

        .setTitle('Ваш Баланс')
        .setColor('RANDOM')
        .setDescription(`В Вашем кошельке - **${bal}$**.\n На Вашем банковском счету - **${bank}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.1 BETA')

        message.channel.send(embed)
    }
}