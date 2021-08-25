const{ Client, Message, MessageEmbed } = require('discord.js')

const jobs = require ('../../jobs')

module.exports = {
    name: 'работы',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 


        if(!jobs.length === 0) return message.reply('Нет работ!')

        const joblist = jobs

        .map((value, index) => {
            return `**${index+1}** ${value.name} `
        });

        const embed = new MessageEmbed()

        .setTitle('Список работ!')
        .setColor('BLUE')
        .setDescription(`**Доступные работы:**\n **1.** Оператор\n**2.** Грузчик\n**3.** Программист\nДля того чтобы устроиться на работу введите команду **!устроиться**`)
        .setTimestamp()
        .setFooter('Версия - 0.1 ВЕТА')

        message.channel.send(embed);

    }
}