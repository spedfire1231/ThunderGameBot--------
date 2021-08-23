const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'daily',
    aliases:['бонус'],
    cooldown: 1000 * 60 * 60 * 24, // 24 часа


    run: async (client,message,args) => { 



        const coins = Math.floor(Math.random() * 1000) + 1

        const embed = new MessageEmbed()

        .setTitle('Ежедневный Бонус')
        .setColor('BLUE')
        .setDescription(`Вы получили ежедневный бонус в размере - ${coins}$`)
        .setTimestamp()
        .setFooter('Версия - 0.1 ВЕТА')

        message.channel.send(embed)

        client.add(message.author.id , coins)
    }
}