<<<<<<< HEAD
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

        const newname = await client.addname(member.id, mynewname)

        if(!args[0]) return message.channel.send('Укажите Ваш новый ник!')

        if(!name) return message.channel.send('У Вас уже есть ник!')

        message.channel.send(`Вы успешно сменили свой ник на - **${mynewname}**`)


    }
=======
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

        const newname = await client.addname(member.id, mynewname)

        if(!args[0]) return message.channel.send('Укажите Ваш новый ник!')

        if(!name) return message.channel.send('У Вас уже есть ник!')

        message.channel.send(`Вы успешно сменили свой ник на - **${mynewname}**`)


    }
>>>>>>> 2b8e3f798a5b038a5b162c1bb2c6a5be5a0f6433
}