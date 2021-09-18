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

        let amount = args[0]

        const bitcoins = await client.bitcoins(member.id)

        const bal = await client.bal(member.userId)

        const name = await client.name(member.id)

        const curs = 45821;

        const embed = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('GREEN')
        .setDescription('Введите число BTC которое хотите купить!')
        .setTimestamp()
        .setFooter('Версия - 3.0')

        if(!amount) return message.channel.send(embed)

        client.addbitcoins(member.id, amount)

        const newbal = await client.rmv(member.userId, amount*45821)

        if(args[0].includes('-')) return message.channel.send('Вы не можете ввести BTC в минус')

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
        .setDescription(`Вы успешно купили **${amount} BTC** на **${args[0]*45821}$**\n\nПосле обмена Ваш баланс был изменён:\n В Вашем кошельке - **${bal}$** | - **${amount*45821}$**\n BTC - **${bitcoins} BTC** | + **${amount} BTC**\n Желаем Вам приятной игры!
        \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
        .setTimestamp()
        .setFooter('Версия - 3.0')

        if(name === 'unnamed') return message.channel.send(embedsuccessname)

        const embedsuccess = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно купили **${amount} BTC** на **${args[0]*45821}$**\n\nПосле обмена Ваш баланс был изменён:\n В Вашем кошельке - **${bal}$** | - **${amount*45821}$**\n BTC - **${bitcoins} BTC** | + **${amount} BTC**\n Желаем Вам приятной игры!`)
        .setTimestamp()
        .setFooter('Версия - 3.0')

        message.channel.send(embedsuccess)

    }
}