const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'добавить',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member;

        const user = message.author

        if(message.member.id != '286853335854612480') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");


        client.add(member.id, parseInt(args[0]));

        const embed = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно добавили в кошелёк **${args[0]}$** игроку - ${args[1]}!`)
        .setTimestamp()
        .setFooter('Версия - 0.2')

        message.channel.send(embed)
    }
}