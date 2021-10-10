const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'makeadmin',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        if(message.member.id != '286853335854612480') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");

        let admin = args[0]

        const adminka = await client.admin(member.id)

        const embed = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('BLUE')
        .setDescription('Пожалуйста укажите ник кому хотите выдать админку!')
        .setTimestamp('')
        .setFooter('Версия - 0.7')

        if(!args[0]) return message.channel.send(embed)

        const embedmakeadmin = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно выдали ${args[0]} пост администратора.`)
        .setTimestamp('')
        .setFooter('Версия - 0.7')

        message.channel.send(embedmakeadmin)

        client.addadmin(member.id, 1)

    }
}