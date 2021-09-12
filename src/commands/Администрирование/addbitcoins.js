const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'addbit',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member;

        const user = message.author

        if(message.member.id != '286853335854612480') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");


        const embednum = new MessageEmbed()

        .setTitle('💡 Подсказка!💡')
        .setColor('RANDOM')
        .setDescription('Пожалуйста, введите число, а не символ!')
        .setTimestamp()
        .setFooter('Версия - 0.2')
    
        if(isNaN(args[0])) return message.channel.send(embednum)

        const embed = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно добавили - **${args[0]} BTC** игроку - ${args[1]}!`)
        .setTimestamp()
        .setFooter('Версия - 0.2')

        client.addbitcoins(member.id, parseInt(args[0]));

        message.channel.send(embed)
    }
}