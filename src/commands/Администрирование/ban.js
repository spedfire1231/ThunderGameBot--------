const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ban',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const name = await client.name(member.id)

        const adminka = await client.admin(member.id)

        let user = args[0]
        
        let reason = args[1]

        if(!args[0]) return message.channel.send('Укажите игрока которому хотите выдать игровую блокировку')

        if(!args[1]) return message.channel.send('Укажите причину блокировки')

        const embed = new MessageEmbed()

        .setTitle(`Блокировка выдана успешно!`)
        .setColor('BLUE')
        .setDescription(`${name}, Вы успешно выдали игровую блокировку!\n Информация об игроке:\n Дискорд: ${args[0]}\n Причина блокировки: ${reason}.\n Данная блокировка выдаётся навсегда и снять её может только Владелец!\nЕсли Вы выдали неверную блокировку обязательно сообщение Владельцу для снятия бана!`)
        .setTimestamp()
        
        if(!adminka) return message.channel.send(embed)

        client.addban(member.id, 1)

        client.addbanreason(member.id, args[1])

    }
}