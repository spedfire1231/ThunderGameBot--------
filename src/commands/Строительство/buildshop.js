const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'строй-магазин',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const health = await client.health(member.id)

        const name = await client.name(member.id)

        const doski = await client.doski(member.id)

        const kirp = await client.kirp(member.id)

        const cem = await client.cem(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('')

        if(regist === 0) return message.channel.send(embedreg1)

        const banned = await client.banacc(member.id)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('')

        if(banned === 1) return message.channel.send(embedban1)

        const embedhealth1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваше состояние здоровья не позволяет использовать данную команду!')
        .setTimestamp()
        .setFooter('')

        if(health <= 80) return message.channel.send(embedhealth1)

        let material = args[0]

        let amount = args[1]

        const pool = parseInt(amount)

        const ebmedarg0 = new MessageEmbed()

        .setTitle('Строительный Магазин')
        .setColor('BLUE')
        .setDescription(`${name}, Укажите какой вид материалов Вы хотите купить\n
        **1.** Доски\n**2.** Кирпичи\n**3.** Цемент\n
        На данный момент у Вас есть столько материалов:\n
        **1.** Доски - ${doski} набора(ов) строительных досок\n**2.** Кирпичи - ${kirp} блока(ов) кирпичей\n**3.** Цемент - ${cem} мешка(ов) цемента`)
        .setTimestamp()
        .setFooter('')

        if(!material) return message.channel.send(ebmedarg0)

        const ebmedarg1 = new MessageEmbed()

        .setTitle('Строительный Магазин')
        .setColor('BLUE')
        .setDescription(`${name}, Укажите количество для покупки материала`)
        .setTimestamp()
        .setFooter('')

        if(!amount) return message.channel.send(ebmedarg1)

        const embeddoski = new MessageEmbed()
        
        .setTitle('Строительный Магазин')
        .setColor('GREEN')
        .setDescription(`${name}, Вы преобрели **${amount} набора(ов) строительных досок** для строительства Дома.\n Стоимость покупки - **${amount*100}$**`)
        .setTimestamp()
        .setFooter('')
        
        if(material == 1) return message.channel.send(embeddoski)+client.add(member.id, -pool*100)+client.adddoski(member.id, pool)

        const embedkirp = new MessageEmbed()
        
        .setTitle('Строительный Магазин')
        .setColor('GREEN')
        .setDescription(`${name}, Вы преобрели **${amount} блока(ов) кирпичей** для строительства Дома.\n Стоимость покупки - **${amount*100}$**`)
        .setTimestamp()
        .setFooter('')
        
        if(material == 2) return message.channel.send(embedkirp)+client.add(member.id, -pool*100)+client.addkirp(member.id, pool)

        const embedcem = new MessageEmbed()
        
        .setTitle('Строительный Магазин')
        .setColor('GREEN')
        .setDescription(`${name}, Вы преобрели **${amount} мешка(ов) цемента** для строительства Дома.\n Стоимость покупки - **${pool*100}$**`)
        .setTimestamp()
        .setFooter('')
        
        if(material == 3) return message.channel.send(embedcem)+client.add(member.id, -pool*100)+client.addcem(member.id, pool)
        

    }
}