const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'убратьбанк',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member;

        if(message.member.id != '286853335854612480') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");


        client.rmvbank(message.member.id, parseInt(args[0]));

        message.channel.send('Removed bank balance')
    }
}