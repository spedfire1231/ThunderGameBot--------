const{ Client, Message, MessageEmbed } = require('discord.js')

const job = require('../../models/job')

module.exports = {
    name: 'работать',
    

    run: async (client,message,args) => { 

        job.findOne({
            Guild: message.guild.id,
            User: message.author.id,},
            async(err, data) => {

                const embed111 = new MessageEmbed()

                .setTitle('Ошибка!')
                .setColor('RED')
                .setDescription('У Вас нет работы!')
                .setTimestamp()
                .setFooter('Версия - 0.1 ВЕТА')

                if(!data) return message.channel.send(embed111)

                const pay = Math.floor(Math.random() * (300))+1

                const member = message.mentions.members.first()

                let user = message.author

                const embed = new MessageEmbed()
        
                .setTitle('Работа!')
                .setColor('GREEN')
                .setDescription(`Вы закончили рабочую смену работая **${data.Job}ом** и заработали - **${pay} coins**`)
                .setTimestamp()
                .setFooter('Thunder Bot - v 0.1 BETA')
                .setThumbnail(user.displayAvatarURL({dynamic: true}))
        
                client.add(message.member.id, pay)
        
                message.channel.send(embed)
        })


    }
}