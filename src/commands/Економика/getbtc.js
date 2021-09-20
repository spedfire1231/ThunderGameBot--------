const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'собрать-биткоины',
    cooldown: 1000 * 60 * 60 * 72,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const name = await client.name(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        const ferma = await client.ferm(member.id)

        const embedfail = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('У Вас нет биткоин ферм чтобы собрать прибыль!')
        .setTimestamp()
        .setFooter('Версия - 0.5')

        if(ferma === 0) return message.channel.send(embedfail)

        const embedsuccess = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно собрали ${ferma} BTC с Ваших биткоин ферм.\n
        Следующий сбор биткоинов может быть осуществлён через 3 дня, фермы работают в активном режиме!`)
        .setTimestamp()
        .setFooter('Версия - 0.5')

        message.channel.send(embedsuccess)

        await client.addbitcoins(member.id, ferma)

    }
}