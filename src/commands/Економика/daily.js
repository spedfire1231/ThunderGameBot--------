const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'бонус',
    cooldown: 1000 * 60 * 60 * 24, // 24 часа


    run: async (client,message,args) => { 



        const coins = Math.floor(Math.random() * 2500) + 550

        const embed = new MessageEmbed()

        .setTitle('Ежедневный Бонус')
        .setColor('BLUE')
        .setDescription(`Вы получили ежедневный бонус в размере - ${coins}$`)
        .setTimestamp()
        .setFooter('Версия - 0.2')

        message.channel.send(embed)

        client.add(message.author.id , coins)
    }
}