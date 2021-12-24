const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'работы',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

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

        let workinfo = args[0]

        const embedinfo = new MessageEmbed()

        .setTitle('Подсказка')
        .setColor('BLUE')
        .setDescription('Укажите номер работы о которой хотите узнать информацию.')
        .setFooter('')
        .setTimestamp()

        if(!args[0]) return message.channel.send(embedinfo)

        const embedjob1 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Грузчик"**:\n Начальная работа.\n Не требуется рабочий прогресс\n Зарплата на данный момент составляет от 123$ до 1500$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 1) return message.channel.send(embedjob1)

        const embedjob2 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Оператор"**:\n Номер работы = 2.\n Требуется **50 единиц** "Рабочего прогресса" \n Зарплата на данный момент составляет от 123$ до 3000$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 2) return message.channel.send(embedjob2)

        const embedjob3 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Программист"**:\n Номер работы = 3.\n Требуется **200 единиц** "Рабочего прогресса" \n Зарплата на данный момент составляет от 123$ до 4500$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 3) return message.channel.send(embedjob3)

        const embedjob4 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Начальник Магазина"**:\n Номер работы = 4.\n Требуется **350 единиц** "Рабочего прогресса" \n Зарплата на данный момент составляет от 123$ до 6000$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 4) return message.channel.send(embedjob4)

        const embedjob5 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Управляющий Ресторана"**:\n Номер работы = 5.\n Требуется **750 единиц** "Рабочего прогресса" \n Зарплата на данный момент составляет от 123$ до 7500$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 5) return message.channel.send(embedjob5)

        const embedjob6 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Директор АЗК"**:\n Номер работы = 6.\n Требуется **1000 единиц** "Рабочего прогресса" \n Зарплата на данный момент составляет от 123$ до 9000$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 6) return message.channel.send(embedjob6)

        const embedjob7 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Генеральный Директор Банка"**:\n Номер работы = 7.\n Требуется **1100 единиц** "Рабочего прогресса" \n Зарплата на данный момент составляет от 123$ до 10500$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 7) return message.channel.send(embedjob7)

        const embedjob8 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Советник Мэра"**:\n Номер работы = 8.\n Требуется **1250 единиц** "Рабочего прогресса" \n Зарплата на данный момент составляет от 123$ до 12000$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 8) return message.channel.send(embedjob8)

        const embedjob9 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Заместитель Мэра"**:\n Номер работы = 9.\n Требуется **1500 единиц** "Рабочего прогресса" \n Зарплата на данный момент составляет от 123$ до 13500$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 9) return message.channel.send(embedjob9)

        const embedjob10 = new MessageEmbed()

        .setTitle('Информация о Профессии')
        .setColor('BLUE')
        .setDescription('Профессия **"Мэр"**:\n Номер работы = 10.\n Требуется **2000 единиц** "Рабочего прогресса" \n Зарплата на данный момент составляет от 123$ до 15000$+')
        .setFooter('')
        .setTimestamp()

        if(workinfo == 10) return message.channel.send(embedjob10)

    }
}