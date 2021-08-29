const { Client, Message, MessageEmbed } = require('discord.js');
const { vip } = require('../../index');

module.exports = {
    name: 'rmvvip',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        
        const user = message.author

        if(message.member.id != '286853335854612480') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");

        client.rmvVIP(member.id, 1);

        message.channel.send(`Вы убрали ВИП статус игроку ${args[0]}`)

    }
}