const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'депозит',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member;

        const bal = await client.bal(message.member.id)

        const emptyembed = new MessageEmbed()

        .setTitle('💡 Подсказка! THUNDER CENTRAL BANK 💡')
        .setColor('GREY')
        .setDescription('Введите значение которое хотите положить в банк!')
        .setTimestamp()

        if(!args[0]) return message.channel.send(emptyembed)

        const embednum = new MessageEmbed()

        .setTitle('💡 Подсказка! THUNDER CENTRAL BANK 💡')
        .setColor('RANDOM')
        .setDescription('Пожалуйста, введите число, а не символ которое хотите положить на банковский счёт!')
        .setTimestamp()
    
        if(isNaN(args[0])) return message.channel.send(embednum)
    
        if(args[0].includes('-')) return message.channel.send('Вы не можете положить деньги в минус')
    
        const embednocash = new MessageEmbed()
    
        .setTitle('Подсказка! THUNDER CENTRAL BANK')
        .setColor('RANDOM')
        .setDescription(`У Вас недостаточно средств! Заработайте более денег либо положите сумму до **${bal}$**!`)
        .setTimestamp()
    
        if (parseInt(args[0]) > bal) return message.channel.send(embednocash)

        client.addbank(member.id, parseInt(args[0]));

        client.rmv(member.id, parseInt(args[0]));

        const embed = new MessageEmbed()
        
        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно положили на счёт **${args[0]}$**`)
        .setTimestamp()

        message.channel.send(embed)
    }
}