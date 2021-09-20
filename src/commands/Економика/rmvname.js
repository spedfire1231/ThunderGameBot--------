const{ Client, Message, MessageEmbed } = require('discord.js')

const jobs = require('../../jobs')

const Money = require('../../schema')

module.exports = {
    name: 'rmvname',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const mynewname = args[0]

        const name = await client.name(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        const newname = await client.addname(member.id, 'unnamed')

        message.channel.send(`*Вы успешно удалили свой ник!*`)


    }
}