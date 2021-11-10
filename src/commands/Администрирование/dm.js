const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dm',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        if(message.member.id != '286853335854612480') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");

        const user = 
        message.mentions.users.first() || 
        message.guild.members.cache.get(args[0])?.user;

        const str = args.slice(1).join(" ")

        if(message.content.includes("-a")) {
            user.send(str.replace("-a", ""));
        } else {
            user.send(`${message.author.tag}: ${str}`)
        }

    }
}