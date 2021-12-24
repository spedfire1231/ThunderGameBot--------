const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'setcurse',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        if(message.member.id != '286853335854612480') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");

        const result = Math.floor(Math.random() * (7500))+40000

        client.addcurse(client.member, result)

        message.channel.send('@everyone')

        const embed = new MessageEmbed()
        
        .setTitle('Курс Bitcoin')
        .setColor('GREEN')
        .setDescription(`Курс Bitcoin валюты был изменён на ${result}\n 
        Следующий курс будет изменён разработчиком через некоторое время\n 
        Приятной игры и хорошего настроения!`)
        .setTimestamp()
        .setFooter('Версия - 1.0')

        message.channel.send(embed)

        message.delete()

    }
}