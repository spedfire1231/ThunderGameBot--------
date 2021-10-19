const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unban',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const name = await client.name(message.member.id)

        let player = args[0]

        const embedna = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('BLUE')
        .setDescription('Укажите игрока которому хотите убрать блокировку')
        .setFooter('Версия - 0.9')
        .setTimestamp('')

        if(!args[0]) return message.channel.send(embedna)

        const embedbanned = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('BLUE')
        .setDescription(`${name}, Вы успешно убрали блокировку игроку - **${player}**`)
        .setFooter('Версия - 0.9')
        .setTimestamp('')

        message.channel.send(embedbanned)

        client.addbanacc(member.id, 0)

        message.channel.send('Блокировка аккаунта успешно убрана!')



    }
}