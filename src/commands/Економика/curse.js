const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'курс',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const bitcoins = await client.bitcoins(member.id)

        const bal = await client.bal(member.userId)

        const bank = await client.bank(member.id)

        const name = await client.name(member.id)

        const embedname = new MessageEmbed()

        .setTitle('Курс Биткоина(BTC)!')
        .setColor('BLUE')
        .setDescription(`На данный момент курс обмена BTC - **45713$**\nКурс покупки BTC - **45821$**\n\n Ваш баланc кошелька - **${bal}$**\n Ваш баланс банковской карты - **${bank}$**\n Количество BTC - **${bitcoins} BTC**
        \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
        .setTimestamp()
        .setFooter('Версия - 3.0')

        if(name === 'unnamed') return message.channel.send(embedname)

        const embed = new MessageEmbed()

        .setTitle('Курс Биткоина(BTC)!')
        .setColor('BLUE')
        .setDescription(`${name}, На данный момент курс обмена BTC - **45713$**\nКурс покупки BTC - **45821$**\n\n Ваш баланc кошелька - **${bal}$**\n Ваш баланс банковской карты - **${bank}$**\n Количество BTC - **${bitcoins} BTC**`)
        .setTimestamp()
        .setFooter('Версия - 3.0')

        message.channel.send(embed)

    }
}