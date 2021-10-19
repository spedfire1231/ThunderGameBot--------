const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'casino',
    aliases: ['казино'],

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

    const member = message.mentions.members.first() || message.author

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

    let amount = args[0]

    if(args[1]) return message.channel.send('Нельзя пушить другого человека!')

    const casinopool = parseInt(amount)

    const emamount = new MessageEmbed()

    .setTitle('Подсказка! 🎲 THUNDER CASINO 🎲')
    .setColor('GREY')
    .setDescription(`Пожалуйста, введите Вашу ставку!`)

    if(!casinopool) return message.channel.send(emamount)

    const bal = await client.bal(message.member.id)

    const surprise = await client.rmv(message.member.id, casinopool)


    const winner = await client.add(message.member.id, casinopool)

    const minusembed = new MessageEmbed()

    .setTitle('Подсказка! 🎲 THUNDER CASINO 🎲')
    .setColor('GREY')
    .setDescription('Вы не можете сделать ставку в минус!')
    .setTimestamp()

    if(amount.includes('-')) return message.channel.send(minusembed)

    const embednocash = new MessageEmbed()

    .setTitle('Подсказка! 🎲 THUNDER CASINO 🎲')
    .setColor('GREY')
    .setDescription(`У Вас недостаточно средств! На Вашем балансе - **${bal}$**`)
    .setTimestamp()

    if (parseInt(casinopool) > bal) return message.channel.send(embednocash)

    const result = Math.floor(Math.random() * 6) + 1;

    if (result == 3) {
        const embedthree = new MessageEmbed()

        .setTitle('🎲 THUNDER CASINO 🎲')
        .setColor('GREY')
        .setDescription(`${message.author}, Выпало число 3. Ваши деньги остаются на месте`)
        .setTimestamp()

        message.channel.send(embedthree)
    }

    if (result < 3) {
        
        const embedlost = new MessageEmbed()
        .setTitle('🎲 THUNDER CASINO 🎲')
        .setColor('RED')
        .setDescription(`${message.author}, Вы проиграли! C Вашего счёта списано - **${casinopool}$**. Выпало число ${result}`)
        .setTimestamp()
        
    message.channel.send(embedlost)

    await client.rmv(message.member.id, casinopool)
    } else if (result > 3) {

        const embedwin = new MessageEmbed()
        .setTitle('🎲 THUNDER CASINO 🎲')
        .setColor('GREEN')
        .setDescription(`${message.author}, Вы выиграли! На Ваш счёт зачислено - **${casinopool}$**. Выпало число ${result}`)
        .setTimestamp()
        
    message.channel.send(embedwin)

    await client.add(message.member.id, casinopool)
    };

    }
}