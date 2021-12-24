const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'биткоин-продать',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const bitcoins = await client.bitcoins(member.id)

        const regist = await client.reg(member.id)

        const health = await client.health(member.id)

        const banned = await client.banacc(member.id)

        const curs = await client.curse()

        const bal = await client.bal(member.id)

        const name = await client.name(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedhealth1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваше состояние здоровья не позволяет использовать данную команду!')
        .setTimestamp()
        .setFooter('')

        if(health <= 30) return message.channel.send(embedhealth1)

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
        .setDescription(`У Вас недостаточно BTC для продажи!`)
        .setTimestamp()
        .setFooter('')
    
        if (bitcoins <= 0) return message.channel.send(embednocash)

        const embedsuccess = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно обменяли **1 BTC** на **${curs-1000}$**
        \n Желаем Вам приятной игры!`)
        .setTimestamp()
        .setFooter('')

        message.channel.send(embedsuccess)

        client.rmvbitcoins(member.id, 1)+client.add(member.id, curs-1000)

    }
}