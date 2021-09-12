const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'cn',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {


        const member = message.mentions.members.first() || message.member

        const mynewname = args[0]

        const name = await client.name(member.id)

        await client.rmvname(member.id, args[0])
        await client.addname(member.id, args[1])

        if(!args[0]) return message.channel.send('Укажите Ваш новый ник!')

        message.channel.send(`Вы успешно сменили свой ник на - **${mynewname}**`)
    }
}