const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'вип-бонус',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const vip = await client.vip(member.id)

        const coins = Math.floor(Math.random() * 15000) + 5000

        client.add(member.userId, coins)

        const embed = new MessageEmbed()

        .setTitle('Ежедневный Бонус')
        .setColor('BLUE')
        .setDescription(`Вы получили ежедневный VIP бонус - **${coins}$**`)
        .setTimestamp()
        .setFooter('Версия - 0.2')

        if(!vip == 0) return message.channel.send(embed)

    }
}