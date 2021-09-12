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

        const mynewname = args[0]

        const name = await client.name(member.id)

        const newname = await client.addname(member.id, 'unnamed')

        message.channel.send(`*Вы успешно удалили свой ник!*`)


    }
}