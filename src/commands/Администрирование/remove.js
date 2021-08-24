const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'убрать',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member;

        if(message.member.id != '286853335854612480') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");

        if(!args[0]) return message.channel.send('Укажите игрока которому хотите убрать средства!')

        if(!args[1]) return message.channel.send('Укажите количество денег которое хотите убрать у игрока!')


        client.rmv(member.id, parseInt(args[1]));

        const embed = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно убрали баланс игрока <@${member.id}> на ${args[1]}`)
        .setTimestamp()
        .setFooter('Версия - 0.1 ВЕТА')

        message.channel.send(embed)

    }
}