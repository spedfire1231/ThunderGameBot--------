const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'биткоин-купить',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const bitcoins = await client.bitcoins(member.id)

        const regist = await client.reg(member.id)

        const banned = await client.banacc(member.id)

        const bal = await client.bal(member.id)

        const name = await client.name(member.id)

        const curs = await client.curse()

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('')

        if(banned === 1) return message.channel.send(embedban1)

        const embednocash = new MessageEmbed()
    
        .setTitle('Подсказка! THUNDER CENTRAL BANK')
        .setColor('RANDOM')
        .setDescription(`У Вас недостаточно средств! Ваш баланс на момент ввода команды **${bal}$**!`)
        .setTimestamp()
        .setFooter('')
    
        if (bal < curs) return message.channel.send(embednocash)

        const embedsuccess = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно купили **1 BTC** за **${curs}$**\n
        Желаем Вам приятной игры!`)
        .setTimestamp()
        .setFooter('')

        message.channel.send(embedsuccess)

        client.addbitcoins(member.id, 1)+client.rmv(member.id, curs)

    }
}