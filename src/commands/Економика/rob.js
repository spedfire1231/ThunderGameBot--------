const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ограбить',
    cooldown: 1000 * 60 * 60 * 2, // 2 часа
    

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member;

        let user2 = message.author.id

        const toRob = args[0]

        const bal = await client.bal(message.member.id)

        const regist = await client.reg(member.id)

        const name = await client.name(member.id)

        const result = Math.floor(Math.random() * 6) + 1;

        const coins = Math.floor(Math.random() * 500) + 50

        const robpool = parseInt(coins)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        if(member.id === '871074592234561546') return message.channel.send('Это бот')

        if(parseInt(robpool) > await client.bal(member.id)) return message.channel.send('У данного игрока недостаточно средств!')

        if(result > 3) { 

            const embedwin0 = new MessageEmbed()
            .setTitle('🎲 THUNDER СИСТЕМА ОГРАБЛЕНИЯ! 🎲')
            .setColor('GREEN')
            .setDescription(`${message.author}, Вы ограбили ${toRob} на сумму - **${robpool}$**!\nСледующее ограбление можно будет провести только через 2 часа.
            \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
            .setTimestamp()
            .setFooter('Версия - 0.2')
            
        if(name === 'unnamed') return message.channel.send(embedwin0)

            const embedwin = new MessageEmbed()
            .setTitle('🎲 THUNDER СИСТЕМА ОГРАБЛЕНИЯ! 🎲')
            .setColor('GREEN')
            .setDescription(`{name}, ${message.author}, Вы ограбили ${toRob} на сумму - **${robpool}$**!\nСледующее ограбление можно будет провести только через 2 часа.`)
            .setTimestamp()
            .setFooter('Версия - 0.2')
            
        message.channel.send(embedwin)

            client.add(user2, robpool)
            client.rmv(member.id, robpool)
        } else if (result < 3) {

            const embedlose2 = new MessageEmbed()
            .setTitle('🎲 THUNDER СИСТЕМА ОГРАБЛЕНИЯ! 🎲')
            .setColor('RED')
            .setDescription(`${message.author}, Вы не смогли ограбить данного человека!\nПопробуйте ещё раз через 2 часа, на данный момент команда на перезарядке!
            \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
            .setTimestamp()
            .setFooter('Версия - 0.2')
            
            if(name === 'unnamed') return message.channel.send(embedlose2)

            const embedlose = new MessageEmbed()
            .setTitle('🎲 THUNDER СИСТЕМА ОГРАБЛЕНИЯ! 🎲')
            .setColor('RED')
            .setDescription(`${name} ${message.author}, Вы не смогли ограбить данного человека!\nПопробуйте ещё раз через 2 часа, на данный момент команда на перезарядке!`)
            .setTimestamp()
            .setFooter('Версия - 0.2')
            
        message.channel.send(embedlose)
        };




    }
}