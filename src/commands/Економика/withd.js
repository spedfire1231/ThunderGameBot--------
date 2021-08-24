const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'снять',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

       
        const member = message.mentions.members.first() || message.member;


        client.rmvbank(member.id, parseInt(args[0]));

        client.add(member.id, parseInt(args[0]));

        const embed = new MessageEmbed()
        
        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно сняли со счёта ${args[0]} coins`)
        .setTimestamp()

        message.channel.send(embed)
    }
}