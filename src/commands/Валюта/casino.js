const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'казино',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

    const member = message.mentions.members.first() || message.author

    const regist = await client.reg(member.id)

    const health = await client.health(member.id)

    const stavka = await client.stavka(member.id)

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

    if(health <= 50) return message.channel.send(embedhealth1)

    const embedban1 = new MessageEmbed()

    .setTitle('Ошибка!')
    .setColor('RED')
    .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
    .setTimestamp()
    .setFooter('')

    if(banned === 1) return message.channel.send(embedban1)

    let amount = args[0]

    const casinopool = parseInt(amount)

    const emamount = new MessageEmbed()

    .setTitle('Подсказка! 🎲 THUNDER CASINO 🎲')
    .setColor('GREY')
    .setDescription(`Пожалуйста, введите Вашу ставку!`)

    if(!amount) return message.channel.send(emamount)

    const bal = await client.bal(member.id)

    const surprise = await client.addstavka(member.id, -casinopool)

    const winner = await client.addstavka(member.id, casinopool)

    const minusembed = new MessageEmbed()

    .setTitle('Подсказка! 🎲 THUNDER CASINO 🎲')
    .setColor('GREY')
    .setDescription('Вы не можете сделать ставку в минус!')
    .setTimestamp()

    if(amount.includes('-')) return message.channel.send(minusembed)

    const embednocash = new MessageEmbed()

    .setTitle('Подсказка! 🎲 THUNDER CASINO 🎲')
    .setColor('GREY')
    .setDescription(`У Вас недостаточно фишек! На Вашем балансе - **${stavka}$**`)
    .setTimestamp()

    if (parseInt(casinopool) > stavka) return message.channel.send(embednocash)

    const result = Math.floor(Math.random() * 2)+1

    /*if (result == 0) {

        const embedwin = new MessageEmbed()
        .setTitle('🎲 THUNDER CASINO 🎲')
        .setColor('GREEN')
        .setDescription(`${message.author}, Вы играли но игровые кости упали на пол. Повторите попытку ещё раз. ${result}`)
        .setTimestamp()
        
    message.channel.send(embedwin)

    await client.add(message.member.id, 0)}*/

    if (result <= 1) {
        
        const embedlost = new MessageEmbed()
        .setTitle('🎲 THUNDER CASINO 🎲')
        .setColor('RED')
        .setDescription(`${message.author}, Вы проиграли! Ваше поражение забрало у Вас **${casinopool} игровых фишек! ${result}**\n
        Количество фишек: **${stavka-casinopool} игровых фишек**`)
        .setTimestamp()
        
    message.channel.send(embedlost)

    client.addstavka(message.member.id, -casinopool)
    } else if (result >= 2) {

        const embedwin = new MessageEmbed()
        .setTitle('🎲 THUNDER CASINO 🎲')
        .setColor('GREEN')
        .setDescription(`${message.author}, Вы выиграли! Ваша победа принесла Вам **${casinopool} игровых фишек!** ${result}\n
        Количество фишек: **${stavka+casinopool} игровых фишек**`)
        .setTimestamp()
        
    message.channel.send(embedwin)

    client.addstavka(message.member.id, casinopool)}

    }
}