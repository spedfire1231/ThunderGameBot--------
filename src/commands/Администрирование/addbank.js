const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'добавитьбанк',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member;

        if(message.member.id != '286853335854612480') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");


        client.addbank(message.member.id, parseInt(args[0]));

        const embed = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно добавили на банковский счёт **${args[0]}$** игроку - ${user}!`)
        .setTimestamp()
        .setFooter('Версия - 0.2')

        message.channel.send(embed)

        
    }
}