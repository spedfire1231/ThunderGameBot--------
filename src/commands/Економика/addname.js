const{ Client, Message, MessageEmbed } = require('discord.js')

const jobs = require('../../jobs')

const Money = require('../../schema')

module.exports = {
    name: 'addname',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member

        const mynewname = args[0]

        const name = await client.name(member.id)

        await client.addname(member.id, args[0])

        if(!args[0]) return message.channel.send('Укажите Ваш новый ник!')

        message.channel.send(`Вы успешно сменили свой ник на - **${mynewname}**`)
    }
}