const{ Client, Message, MessageEmbed } = require('discord.js')

const jobs = require('../../jobs')

const job = require('../../models/job')

module.exports = {
    name: 'уволится',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const embed1 = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('BLUE')
        .setDescription('Пожалуйста, укажите пиричину по которой Вы хотите уволится с работы')
        .setTimestamp()
        .setFooter('Версия - 0.1 ВЕТА')

        if(!args[0]) return message.channel.send(embed1)
        const JobToSelect = args[0].toLowerCase()


        const params = {
            Guild: message.guild.id,
            User: message.author.id,
        }
        job.findOne(params, async(err, data) => {
            if(data) {
                const hasJob = Object.keys(data.Job).includes(JobToSelect)
                if(!hasJob) {
                    data.Job[JobToSelect] = 0
                } else {
                    data.Job[JobToSelect]--
                }
                console.log(data);
                await job.findOneAndDelete(params, data)
            } else {
                new job({
                    Guild: message.guild.id,
                    User: message.author.id,
                    Job: JobToSelect
                }).save()
            }

            const embed2 = new MessageEmbed()

            .setTitle('Успешно!')
            .setColor('GREEN')
            .setDescription(`Вы уволились с работы по причине - ${args[0]}`)
            .setTimestamp()
            .setFooter('Версия - 0.1 ВЕТА')


            message.channel.send(embed2)
            client.job(message.author.id, JobToSelect)
        })
    }
}