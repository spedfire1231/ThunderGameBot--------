const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'репорт',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const name = await client.name(message.author.id)

        let user = message.mentions.users.first()

        const embed1 = new MessageEmbed()
        
        .setTitle('Ошибка')
        .setColor('RED')
        .setDescription(`Пожалуйста, отметьте человека на которого хотите отправить жалобу!`)
        .setTimestamp()
        .setFooter('Версия - 1.1')
        
        if(!args[0]) return message.channel.send(embed1)
    
        let reason = args.slice(1).join(" ")

        const embed2 = new MessageEmbed()
        
        .setTitle('Ошибка')
        .setColor('RED')
        .setDescription(`Пожалуйста, введите причину жалобы!`)
        .setTimestamp()
        .setFooter('Версия - 1.1')

        if(!reason) return message.channel.send(embed2)
    
        let avatar = user.displayAvatarURL();
    
        let channel = message.guild.channels.cache.find((ch) => ch.name === "reports")
        if(!channel) return message.channel.send("There is not channel called reports, please contact a mod or create channel called report");
    
        const embed = new MessageEmbed()
    
        .setTitle('Жалоба!')
        .setColor('RED')
        .setDescription(`Игрок ${name} отправил жалобу на игрока **${user.tag}**!`)
        .setThumbnail(avatar)
        .setTimestamp()
        .addFields(
            { name: "ID отправителя:", value: `${message.author.id}`, inline: true},
            { name: "Тэг отправителя:", value: `${message.author.tag}`, inline: true},
            { name: "Номер жалобы:", value: `${user.id}`, inline: true},
            { name: "Нарушитель:", value: `${user.tag}`, inline: true},
            { name: "Причина:", value: `${reason}`, inline: true}
        )
        channel.send(embed)
        message.channel.send('Жалоба успешно отправлена, ожидайте рассмотрения')

    }
}