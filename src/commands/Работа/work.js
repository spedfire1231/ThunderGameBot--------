const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'устроиться',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        let newjob = args[0]

        const regist = await client.reg(member.id)

        const health = await client.health(member.id)

        const banned = await client.banacc(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedhealth1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваше состояние здоровья не позволяет использовать данную команду!')
        .setTimestamp()
        .setFooter('')

        if(health <= 20) return message.channel.send(embedhealth1)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('')

        if(banned === 1) return message.channel.send(embedban1)

        const name = await client.name(member.id)

        if(!args[0]) return message.channel.send('Укажите номер работы, чтобы устроиться')

        const job = await client.job(member.id)

        const jobprog = await client.jobprogress(member.id)

        const job1 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Грузчика`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 1) return message.channel.send(job1)+await client.addjob(member.id, 1)

        const job2 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Оператора`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 2 && jobprog >= 50) return message.channel.send(job2)+await client.addjob(member.id, 2)

        if(args[0] == 2 && jobprog) return message.channel.send('У Вас недостаточно репутации чтобы попасть на данную работу')

        const job3 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Программиста`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 3 && jobprog >= 200) return message.channel.send(job3)+await client.addjob(member.id, 3)

        if(args[0] == 3 && jobprog) return message.channel.send('У Вас недостаточно репутации чтобы попасть на данную работу')

        const job4 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Начальника Магазина`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 4 && jobprog >= 350) return message.channel.send(job4)+await client.addjob(member.id, 4)

        if(args[0] == 4 && jobprog) return message.channel.send('У Вас недостаточно репутации чтобы попасть на данную работу')

        const job5 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Управляющего Рестораном`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 5 && jobprog >= 750) return message.channel.send(job5)+await client.addjob(member.id, 5)

        if(args[0] == 5 && jobprog) return message.channel.send('У Вас недостаточно репутации чтобы попасть на данную работу')

        const job6 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Директор АЗК`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 6 && jobprog >= 1000) return message.channel.send(job6)+await client.addjob(member.id, 6)

        if(args[0] == 6 && jobprog) return message.channel.send('У Вас недостаточно репутации чтобы попасть на данную работу')

        const job7 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Генеральный Директор Банка`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 7 && jobprog >= 1100) return message.channel.send(job7)+await client.addjob(member.id, 7)

        if(args[0] == 7 && jobprog) return message.channel.send('У Вас недостаточно репутации чтобы попасть на данную работу')

        const job8 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Советник Мэра`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 8 && jobprog >= 1250) return message.channel.send(job8)+await client.addjob(member.id, 8)

        if(args[0] == 8 && jobprog) return message.channel.send('У Вас недостаточно репутации чтобы попасть на данную работу')

        const job9 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Заместитель Мэра`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 9 && jobprog >= 1500) return message.channel.send(job9)+await client.addjob(member.id, 9)

        if(args[0] == 9 && jobprog) return message.channel.send('У Вас недостаточно репутации чтобы попасть на данную работу')

        const job10 = new MessageEmbed()

        .setTitle('Успешно')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно выбрали профессию Мэр города`)
        .setTimestamp()
        .setFooter('')

        if(args[0] == 10 && jobprog >= 2000) return message.channel.send(job10)+await client.addjob(member.id, 10)

        if(args[0] == 10 && jobprog) return message.channel.send('У Вас недостаточно репутации чтобы попасть на данную работу')


    }
}