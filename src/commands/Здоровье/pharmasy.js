const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'аптека',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const bal = await client.bal(member.id)

        const banned = await client.banacc(member.id)

        const name = await client.name(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(banned === 1) return message.channel.send(embedban1)

        let slot = args[0]

        const embedslot = new MessageEmbed()
        
        .setTitle('Аптека')
        .setColor('GREEN')
        .setDescription(`Здравствуйте, **${name}**, укажите, что желаете купить.\n
        1. **Обезболивающее** | Восстанавливает - **1 HP** | Цена - **100$**\n2. **Таблетки** | Восстанавливает - **5 HP** | Цена - **500$** \n3. **Антибиотик** | Восстанавливает - **10 HP** | Цена - **1000$**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.tamrobaltics.com/media/images/Article-photos/benu-prag-8029c_ps-2.jpg')
        
        if(!slot) return message.channel.send(embedslot)

        let amount = args[1]

        const am = parseInt(amount)

        const embedamount = new MessageEmbed()

        .setTitle('Аптека')
        .setColor('BLUE')
        .setDescription(`**${name}**, укажите желаемое количество для покупки\n
        1. **Обезболивающее** | Восстанавливает - **1 HP** | Цена - **100$**\n2. **Таблетки** | Восстанавливает - **5 HP** | Цена - **500$** \n3. **Антибиотик** | Восстанавливает - **10 HP** | Цена - **1000$**`)
        .setTimestamp()
        .setFooter('')
        .setImage('https://www.tamrobaltics.com/media/images/Article-photos/benu-prag-8029c_ps-2.jpg')

        if(!amount) return message.channel.send(embedamount)

        const embednum = new MessageEmbed()

        .setTitle('💡 Подсказка!')
        .setColor('RANDOM')
        .setDescription('Пожалуйста, введите число, а не символ которое хотите преобрести!')
        .setTimestamp()
        .setFooter('')
    
        if(isNaN(args[0])) return message.channel.send(embednum)
    
        if(args[0].includes('-')) return message.channel.send('Вы не можете купить препараты в минус')
    
        const embednocash = new MessageEmbed()
    
        .setTitle('💡 Подсказка!💡')
        .setColor('RANDOM')
        .setDescription(`У Вас недостаточно средств! Заработайте более денег либо положите сумму до **${bal}$**!`)
        .setTimestamp()
        .setFooter('')
    
        if (parseInt(args[0]) > bal) return message.channel.send(embednocash)

        const embedbuy1 = new MessageEmbed()
        
        .setTitle('Аптека')
        .setColor('GREEN')
        .setDescription(`**${name}**, Вы успешно преобрели **Обезболивающее** в количестве **${amount} штук** за **${amount*100}$**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.tamrobaltics.com/media/images/Article-photos/benu-prag-8029c_ps-2.jpg')
        
        if(slot == 1) return message.channel.send(embedbuy1)+client.add(member.id, -amount*100)+client.addobezb(member.id, am)

        const embedbuy2 = new MessageEmbed()
        
        .setTitle('Аптека')
        .setColor('GREEN')
        .setDescription(`**${name}**, Вы успешно преобрели **Таблетки** в количестве **${amount} штук** за **${amount*500}$**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.tamrobaltics.com/media/images/Article-photos/benu-prag-8029c_ps-2.jpg')
        
        if(slot == 2) return message.channel.send(embedbuy2)+client.add(member.id, -amount*500)+client.addtabl(member.id, am)

        const embedbuy3 = new MessageEmbed()
        
        .setTitle('Аптека')
        .setColor('GREEN')
        .setDescription(`**${name}**, Вы успешно преобрели **Антибиотик** в количестве **${amount} штук** за **${amount*1000}$**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.tamrobaltics.com/media/images/Article-photos/benu-prag-8029c_ps-2.jpg')
        
        if(slot == 3) return message.channel.send(embedbuy3)+client.add(member.id, -amount*1000)+client.addanti(member.id, am)
        
        

    }
}