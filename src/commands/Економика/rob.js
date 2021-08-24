const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ограбить',
    //cooldown: 1000 * 60 * 60 * 2, // 2 часа
    

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member;

        let user2 = message.author.id

        const toRob = args[0]

        const bal = await client.bal(message.member.id)

        const result = Math.floor(Math.random() * 6) + 1;

        const coins = Math.floor(Math.random() * 500) + 50

        const robpool = parseInt(coins)

        if(member.id === '871074592234561546') return message.channel.send('Это бот')

        if(parseInt(robpool) > await client.bal(member.id)) return message.channel.send('У данного игрока недостаточно средств!')

        if(result > 3) { 
            const embedwin = new MessageEmbed()
            .setTitle('🎲 THUNDER СИСТЕМА ОГРАБЛЕНИЯ! 🎲')
            .setColor('GREEN')
            .setDescription(`${message.author}, Вы ограбили ${toRob} на сумму - **${robpool}$**!\nСледующее ограбление можно будет провести только через 2 часа.`)
            .setTimestamp()
            
        message.channel.send(embedwin)

            client.add(user2, robpool)
            client.rmv(member.id, robpool)
        } else if (result < 3) {

            const embedlose = new MessageEmbed()
            .setTitle('🎲 THUNDER СИСТЕМА ОГРАБЛЕНИЯ! 🎲')
            .setColor('RED')
            .setDescription(`${message.author}, Вы не смогли ограбить данного человека!\nПопробуйте ещё раз через 2 часа, на данный момент команда на перезарядке!`)
            .setTimestamp()
            
        message.channel.send(embedlose)
        };




    }
}