const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'передать',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const user = message.mentions.users.first()

        const user2 = message.author.id

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const banned = await client.banacc(member.id)

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

        const embednocash = new MessageEmbed()
    
        .setTitle('Подсказка! THUNDER CENTRAL BANK')
        .setColor('RANDOM')
        .setDescription(`У Вас недостаточно средств! Заработайте более денег либо положите сумму до **${bal}$**!`)
        .setTimestamp()
        .setFooter('Версия - 0.2')
    
        if (parseInt(args[1]) > bal) return message.channel.send(embednocash)

        const name = await client.name(member.id)

        let sendTo = args[0]

        const embedwho = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('BLUE')
        .setDescription('Выберите человека которому хотите передать деньги')
        .setTimestamp()
        .setFooter('Версия - 0.2')

        if(!args[0]) return message.channel.send(embedwho)

        let coinsToDonate = args[1]

        const convert = parseInt(coinsToDonate)

        const embedam = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('BLUE')
        .setDescription('Введите число которое хотите передать человеку')
        .setTimestamp()
        .setFooter('Версия - 0.2')

        if(!args[1]) return message.channel.send(embedam)

        const coins = await client.bal(message.member.id)

        if(args[1].includes('-')) return message.channel.send('Вы не можете положить деньги в минус')

        const embednocashh = new MessageEmbed()
    
        .setTitle('Подсказка! THUNDER CENTRAL BANK')
        .setColor('RANDOM')
        .setDescription(`У Вас недостаточно средств! Заработайте более денег либо положите сумму до **${coins}$**!`)
        .setTimestamp()
        .setFooter('Версия - 0.2')
    
        if (parseInt(args[1]) > coins) return message.channel.send(embednocashh)

        const newbalus = await client.add(user.id, convert)

        const embednum = new MessageEmbed()

        .setTitle('💡 Подсказка! 💡')
        .setColor('BLUE')
        .setDescription('Пожалуйста, введите число, а не символ которое хотите положить на банковский счёт!')
        .setTimestamp()
        .setFooter('Версия - 0.2')
    
        if(isNaN(args[1])) return message.channel.send(embednum)

        const newbal = await client.rmv(user2, convert)

        if(user.id === '871074592234561546') return message.channel.send('Это бот')


        const embedname = new MessageEmbed()

        .setTitle('Передача средств успешно произведена!')
        .setColor('GREEN')
        .setDescription(`Вы успешно передали ${sendTo} - **${coinsToDonate}$**!
        \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
        .setTimestamp()
        .setFooter('Версия - 0.2')
        .setThumbnail(user.displayAvatarURL({dynamic: true}))

        if(name === 'unnamed') return message.channel.send(embedname)

        const embed = new MessageEmbed()

        .setTitle('Передача средств успешно произведена!')
        .setColor('GREEN')
        .setDescription(`Вы успешно передали ${sendTo} - **${coinsToDonate}$**!`)
        .setTimestamp()
        .setFooter('Версия - 0.2')
        .setThumbnail(user.displayAvatarURL({dynamic: true}))

        message.channel.send(embed)


    }
}