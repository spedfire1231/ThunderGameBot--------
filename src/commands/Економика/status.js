const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'status',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const vip = await client.vip(member.id)

        if(vip == 0) return message.channel.send('У игрока нет ВИП статуса!')
        
        if(vip == 1) return message.channel.send('У игрока имеется ВИП статус!')
    

    }
}