const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'старт',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        let selectname = args[0]

        const embedargs0 = new MessageEmbed()

        .setTitle(`Регистрация аккаунта!`)
        .setColor('BLUE')
        .setDescription(`Укажите Ваш никнейм для начала использования моих возможностей!`)
        .setTimestamp()

        if(!args[0]) return message.channel.send(embedargs0)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы уже зарегестрированы!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 1) return message.channel.send(embedreg1)

        const startreg = new MessageEmbed()

        .setTitle('Регистрация аккаунта!')
        .setColor('GREEN')
        .setDescription(`Вы успешно зарегистрировали свой аккаунт под ником - **${selectname}**\n
        Вам был выдан стартовый бонус в размере **1500$**\nВам были разблокированы команды бота, проверьте Ваш баланс командой - **!баланс** чтобы удостовериться в этом.\n
        Приятной игры на нашем проекте!`)
        .setTimestamp()
        .setFooter('Версия - 0.4')

        message.channel.send(startreg)

        await client.addregister(member.id, 1)

        await client.addname(member.id, selectname)

        await client.add(member.id, 1500)

        await client.addbank(member.id, 0)

        await client.addbitcoins(member.id, 0)

        await client.addVIP(member.id, 0)

        await client.addadmin(member.id, 0)

        await client.addferm(member.id, 0)

    }
}