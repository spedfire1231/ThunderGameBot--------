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

        const bal = await client.bal(member.userId)

        const curs = 45713;

        const embed = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('GREEN')
        .setDescription('Введите число BTC которое хотите перевести в валюту!')
        .setTimestamp()
        .setFooter('Версия - 3.0')

        if(!amount) return message.channel.send(embed)

        client.rmvbitcoins(member.id, amount)

        const newbal = await client.add(member.userId, amount*45713)

        if(args[0].includes('-')) return message.channel.send('Вы не можете положить деньги в минус')

        const embednum = new MessageEmbed()

        .setTitle('💡 Подсказка!')
        .setColor('RANDOM')
        .setDescription('Пожалуйста, введите число, а не символ!')
        .setTimestamp()
        .setFooter('Версия - 0.2')
    
        if(isNaN(args[0])) return message.channel.send(embednum)

        const embedsuccess = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно обменяли **${amount} BTC** на **${args[0]*45713}$**\n\nПосле обмена Ваш баланс был изменён:\n В Вашем кошельке - **${bal}$** | + **${amount*45713}$**\n BTC - **${bitcoins} BTC** | - **${amount} BTC**\n Желаем Вам приятной игры!`)
        .setTimestamp()
        .setFooter('Версия - 3.0')

        message.channel.send(embedsuccess)

        setInterval

    }
}