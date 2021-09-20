const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'вип-бонус',
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

        const vip = await client.vip(member.id)

        const name = await client.name(member.id)

        const coins = Math.floor(Math.random() * 15000) + 5000

        client.add(member.userId, coins)

        const embed4 = new MessageEmbed()

        .setTitle('Ежедневный Бонус')
        .setColor('BLUE')
        .setDescription(`Вы получили ежедневный VIP бонус - **${coins}$**
        \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
        .setTimestamp()
        .setFooter('Версия - 0.2')

        if(!vip == 0, name === 'unnamed') return message.channel.send(embed4)

        const embed = new MessageEmbed()

        .setTitle('Ежедневный Бонус')
        .setColor('BLUE')
        .setDescription(`Вы получили ежедневный VIP бонус - **${coins}$**`)
        .setTimestamp()
        .setFooter('Версия - 0.2')

        if(!vip == 0) return message.channel.send(embed)

    }
}