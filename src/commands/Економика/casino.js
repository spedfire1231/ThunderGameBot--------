const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'казино',
    cooldown: 10000, //  часа

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

    let member = message.mentions.members.first() || message.author

    let amount = args[0]

    if(args[1]) return message.channel.send('Нельзя пушить другого человека!')

    const casinopool = parseInt(amount)

    const emamount = new MessageEmbed()

    .setTitle('Подсказка! 🎲 THUNDER CASINO 🎲')
    .setColor('GREY')
    .setDescription(`Пожалуйста, введите Вашу ставку!`)

    if(!casinopool) return message.channel.send(emamount)

    const bal = await client.bal(message.member.id)

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

    if(args[0] > bal) return message.channel.send(embednocash)+await client.add(message.member.id, +0)

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