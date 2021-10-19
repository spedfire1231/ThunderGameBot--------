const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ограб-начать2',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        const banned = await client.banacc(member.id)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(banned === 1) return message.channel.send(embedban1)

        const bankrob = await client.bankrob(member.id)

        const robprog = await client.robprog(member.id)

        if(bankrob == 2) return message.channel.send('Вы уже начали ограбление банка')

        if(bankrob == 0) return message.channel.send('Вы уже начали ограбление банка')

        if(bankrob == 3) return message.channel.send('Вы уже начали ограбление банка')

        const embed = new MessageEmbed()
        
        .setTitle('Ограбление банка')
        .setColor('GREEN')
        .setDescription(`Вы перешли на вторую фазу ограбления банка!\n
        Ваша задача на этой фазе: Нападение на отделение банка с подельниками, сбор денег в пакеты.`)
        .setTimestamp()
        .setFooter('Версия - 1.0')
        
        if(bankrob == 1 && robprog == 10) return message.channel.send(embed)+client.addbankrob(member.id, 2)

    }
}