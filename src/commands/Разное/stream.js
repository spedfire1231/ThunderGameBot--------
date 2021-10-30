const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
    name: 'стрим',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        //if(message.member.id != '355668890338066434') return message.channel.send("У вас недостаточно прав чтобы использовать данную команду!");

        const file = new MessageAttachment('../thundergitbot/forze.png')

        const embed = new MessageEmbed()

        .setTitle('ВНИМАНИЕ!')
        .setColor('GREEN')
        .setDescription(`Уважаемые игроки! Глава Гильдии **SABLE0379** начал стрим на **Twitch**.\n
        Если Вы желаете присоединиться к стриму - ниже будет указана ссылка на **Twitch** канал данного стримера. Заходите и наслаждайтесь стримом.\n
        Приятного времяпровождения и хорошей игры!\n
        **https://www.twitch.tv/sable0606**`)
        .setImage('https://i.imgur.com/NxeQPlV.png')
        .setFooter('Powered by .thunder#7506', 'https://i.imgur.com/NxeQPlV.png')

        

        message.channel.send(embed)

        // 355668890338066434


    }
}