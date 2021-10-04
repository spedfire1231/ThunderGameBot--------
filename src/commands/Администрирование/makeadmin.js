const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'makeadmin',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        let admin = args[0]

        const adminka = await client.admin(member.id)

        const admpassset = Math.floor(Math.random() * 15000) + 543251435234

        //if(adminka === 0) return message.channel.send('Вы не администратор!')

        //if(adminka === 1) return message.channel.send('Вы не разработчик!')

        const embed = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('BLUE')
        .setDescription('Пожалуйста укажите ник кому хотите выдать администрирование!')
        .setTimestamp('')
        .setFooter('Версия - 0.7')

        if(!args[0]) return message.channel.send(embed)

        const embedmakeadmin = new MessageEmbed()

        .setTitle('Успешно!')
        .setColor('GREEN')
        .setDescription(`Вы успешно выдали ${args[0]} пост администратора его пароль от администрирования ${admpassset}.`)
        .setTimestamp('')
        .setFooter('Версия - 0.7')

        message.channel.send(embedmakeadmin)

        client.addadmin(member.id, 1)

        client.addadminpass(member.id, admpassset)

        message.channel.send(`${args[0]} Вам была выдана админка, Ваш пароль ${admpassset}`)

    }
}