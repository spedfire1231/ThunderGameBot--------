const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'перевод',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const banned = await client.banacc(member.id)

        const user = message.mentions.users.first()

        const user2 = message.author.id

        let sendTo = args[0]

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('')

        if(banned === 1) return message.channel.send(embedban1)

        const embed2 = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('BLUE')
        .setDescription('Выберите человека которому хотите перевести деньги на счёт')
        .setTimestamp()
        .setFooter('')

        if(!args[0]) return message.channel.send(embed2)

        let coinsToDonate = args[1]

        const convert = parseInt(coinsToDonate)

        const embed3 = new MessageEmbed()

        .setTitle('Подсказка!')
        .setColor('BLUE')
        .setDescription('Введите число которое хотите перевести человеку на счёт')
        .setTimestamp()
        .setFooter('')

        if(!args[1]) return message.channel.send(embed3)

        const coins = await client.bank(message.member.id)

        const newbalus = await client.addbank(user.id, convert)

        if(args[1].includes('-')) return message.channel.send('Вы не можете положить деньги в минус')

        const newbal = await client.rmvbank(user2, convert)

        const embednocash = new MessageEmbed()
    
        .setTitle('Подсказка! THUNDER CENTRAL BANK')
        .setColor('RANDOM')
        .setDescription(`У Вас недостаточно средств! Заработайте более денег либо положите сумму до **${coins}$** !`)
        .setTimestamp()
        .setFooter('')
    
        if (parseInt(args[1]) > coins) return message.channel.send(embednocash)

        if(user.id === '871074592234561546') return message.channel.send('Это бот')

        const embednum = new MessageEmbed()

        .setTitle('💡 Подсказка! 💡')
        .setColor('BLUE')
        .setDescription('Пожалуйста, введите число, а не символ которое хотите положить на банковский счёт!')
        .setTimestamp()
        .setFooter('')
    
        if(isNaN(args[1])) return message.channel.send(embednum)

        const embed = new MessageEmbed()

        .setTitle('Перевод средств успешно произведён!')
        .setColor('GREEN')
        .setDescription(`Вы успешно перевели на банковский счёт ${sendTo} - **${coinsToDonate}$**!`)
        .setTimestamp()
        .setFooter('')
        .setThumbnail(user.displayAvatarURL({dynamic: true}))

        message.channel.send(embed)


    }
}