const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'работать',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const banned = await client.banacc(member.id)

        const energy = await client.energy(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(banned === 1) return message.channel.send(embedban1)

        const name = await client.name(member.id)

        const job = await client.job(member.id)

        const pay = Math.floor(Math.random() * (job * 1500))+123

        const jobprog = await client.jobprogress(member.id)

        const embed = new MessageEmbed()
        
        .setTitle('Подсказка')
        .setColor('BLUE')
        .setDescription(`У Вас недостаточно энергии чтобы начать работу.\n
        Пропишите команду !получить-энергию для того чтобы узнать доступна ли на данный момент энергия!`)
        .setTimestamp()
        .setFooter('Версия - ')
        
        if(energy == 0) return message.channel.send()

        const embednojob = new MessageEmbed()

        .setTitle('Подсказка')
        .setColor('BLUE')
        .setDescription('У Вас нет работы!')
        .setTimestamp()
        .setFooter('Версия - 0.9')

        if(!job) return message.channel.send(embednojob)

        const embedpay1 = new MessageEmbed()

        .setTitle('Зарплата!')
        .setColor('GREEN')
        .setDescription(`${name}, Вы закончили рабочую смену работая Грузчиком и заработали ${pay}$.\n
        Следующую рабочую смену Вы сможете начать через 30 секунд!`)
        .setTimestamp()
        .setFooter('Версия - 0.9')

        if(job <= 1) return message.channel.send(embedpay1)+client.add(member.id, pay)+client.addjp(member.id, 1)+client.addenergy(member.id, -1)

        const embedpay2 = new MessageEmbed()

        .setTitle('Зарплата!')
        .setColor('GREEN')
        .setDescription(`${name}, Вы закончили рабочую смену работая Оператором и заработали ${pay}$.\n
        Следующую рабочую смену Вы сможете начать через 30 секунд!`)
        .setTimestamp()
        .setFooter('Версия - 0.9')

        if(job <= 2) return message.channel.send(embedpay2)+client.add(member.id, pay)+client.addjp(member.id, 1)+client.addenergy(member.id, -1)

        const embedpay3 = new MessageEmbed()

        .setTitle('Зарплата!')
        .setColor('GREEN')
        .setDescription(`${name}, Вы закончили рабочую смену работая Программистом и заработали ${pay}$.\n
        Следующую рабочую смену Вы сможете начать через 30 секунд!`)
        .setTimestamp()
        .setFooter('Версия - 0.9')

        if(job <= 3) return message.channel.send(embedpay3)+client.add(member.id, pay)+client.addjp(member.id, 1)+client.addenergy(member.id, -1)

        const embedpay4 = new MessageEmbed()

        .setTitle('Зарплата!')
        .setColor('GREEN')
        .setDescription(`${name}, Вы закончили рабочую смену работая Начальником Магазина и заработали ${pay}$.\n
        Следующую рабочую смену Вы сможете начать через 30 секунд!`)
        .setTimestamp()
        .setFooter('Версия - 0.9')

        if(job <= 4) return message.channel.send(embedpay4)+client.add(member.id, pay)+client.addjp(member.id, 1)+client.addenergy(member.id, -1)

        const embedpay5 = new MessageEmbed()

        .setTitle('Зарплата!')
        .setColor('GREEN')
        .setDescription(`${name}, Вы закончили рабочую смену работая Управляющим Рестораном и заработали ${pay}$.\n
        Следующую рабочую смену Вы сможете начать через 30 секунд!`)
        .setTimestamp()
        .setFooter('Версия - 0.9')

        if(job <= 5) return message.channel.send(embedpay5)+client.add(member.id, pay)+client.addjp(member.id, 1)+client.addenergy(member.id, -1)

        const embedpay6 = new MessageEmbed()

        .setTitle('Зарплата!')
        .setColor('GREEN')
        .setDescription(`${name}, Вы закончили рабочую смену работая Директором АЗК и заработали ${pay}$.\n
        Следующую рабочую смену Вы сможете начать через 30 секунд!`)
        .setTimestamp()
        .setFooter('Версия - 0.9')

        if(job <= 6) return message.channel.send(embedpay6)+client.add(member.id, pay)+client.addjp(member.id, 1)+client.addenergy(member.id, -1)



    }
}