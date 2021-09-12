const{ Client, Message, MessageEmbed } = require('discord.js')

const jobs = require('../../jobs')

const job = require('../../models/job')

module.exports = {
    name: 'устроиться',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const embedstart = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('BLUE')
        .setDescription('Пожалуйста выберите профессию! **!работы**')
        .setTimestamp()
        .setFooter('Версия - 0.2')

        if(!args[0]) return message.channel.send(embedstart)
        const JobToSelect = args[0].toLowerCase()

        const validJob = !!jobs.find((val) => val.name === JobToSelect);

        const embed1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Профессия которую Вы выбрали не существует!')
        .setTimestamp()
        .setFooter('Версия - 0.2')

        if(!validJob) return message.channel.send()


        const params = {
            Guild: message.guild.id,
            User: message.author.id,
        }
        job.findOne(params, async(err, data) => {
            if(data) {
                const hasJob = Object.keys(data.Job).includes(JobToSelect)
                if(!hasJob) {
                    data.Job[JobToSelect] = 1
                } else {
                    data.Job[JobToSelect]++
                }
                console.log(data);
                await job.findOneAndUpdate(params, data)
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
            .setDescription(`Вы выбрали профессию - **${JobToSelect}**`)
            .setTimestamp()
            .setFooter('Версия - 0.2')

            message.channel.send(embed2)
            client.job(message.author.id, JobToSelect)
        })
    }
}