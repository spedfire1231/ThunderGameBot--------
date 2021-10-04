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
        
        const regist = await client.reg(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        client.rmvbank(member.id, parseInt(args[0]));

        const name = await client.name(member.id)

        client.add(member.id, parseInt(args[0]));

        const embed2 = new MessageEmbed()
        
        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно сняли со счёта ${args[0]}$
        \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
        .setTimestamp()
        .setFooter('Версия - 0.2')

        if(name === 'unnamed') return message.channel.send(embed2)

        const embed = new MessageEmbed()
        
        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно сняли со счёта ${args[0]}$`)
        .setTimestamp()
        .setFooter('Версия - 0.2')

        message.channel.send(embed)
    }
}