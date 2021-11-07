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

        let amount = args[0]

        const bitcoins = await client.bitcoins(member.id)

        const regist = await client.reg(member.id)

        const banned = await client.banacc(member.id)

        const curse = await client.curs(member.id, curse)

        const bal = await client.bal(member.id)

        const name = await client.name(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(banned === 1) return message.channel.send(embedban1)

        const embed = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('GREEN')
        .setDescription('Введите число BTC которое хотите перевести в валюту!')
        .setTimestamp()
        .setFooter('Версия - 3.0')

        if(!amount || amount == 0) return message.channel.send(embed)

        if(args[0].includes('-')) return message.channel.send('Вы не можете положить деньги в минус')

        const embednocash = new MessageEmbed()
    
        .setTitle('Подсказка! THUNDER CENTRAL BANK')
        .setColor('RANDOM')
        .setDescription(`У Вас недостаточно BTC для продажи!`)
        .setTimestamp()
        .setFooter('Версия - 0.2')
    
        if (bitcoins < amount) return message.channel.send(embednocash)

        const embednum = new MessageEmbed()

        .setTitle('💡 Подсказка!')
        .setColor('RANDOM')
        .setDescription('Пожалуйста, введите число, а не символ!')
        .setTimestamp()
        .setFooter('Версия - 0.2')
    
        if(isNaN(args[0])) return message.channel.send(embednum)

        const embedsuccessname = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно обменяли **${amount} BTC** на **${amount*curse-amount*1000}$**\n\nПосле обмена Ваш баланс был изменён:\n В Вашем кошельке - **${bal}$** | + **${amount*45713}$**\n BTC - **${bitcoins} BTC** | - **${amount} BTC**\n Желаем Вам приятной игры!
        \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
        .setTimestamp()
        .setFooter('Версия - 3.0')

        if(name === 'unnamed') return message.channel.send(embedsuccessname)

        const embedsuccess = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно обменяли **${amount} BTC** на **${amount*curs-amount*1000}$**\n\nПосле обмена Ваш баланс был изменён:\n В Вашем кошельке - **${bal}$** | + **${amount*curse-amount*1000}$**\n BTC - **${bitcoins} BTC** | - **${amount} BTC**\n Желаем Вам приятной игры!`)
        .setTimestamp()
        .setFooter('Версия - 3.0')

        message.channel.send(embedsuccess)

        client.rmvbitcoins(member.id, amount)+client.add(member.id, curse-1000)

    }
}