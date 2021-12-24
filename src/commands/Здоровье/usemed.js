const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'лечение',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const banned = await client.banacc(member.id)

        const health = await client.health(member.id)

        const name = await client.name(member.id)

        const obezb = await client.obezb(member.id)

        const tabl = await client.tabl(member.id)

        const anti = await client.anti(member.id)

        let amount = args[0]

        const embed100hp = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription(`${name}, У Вас максимальное количество здоровья!`)
        .setFooter()
        .setTimestamp()

        if(health >= 100) return message.channel.send(embed100hp)

        const embed91hp = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription(`${name}, У Вас максимальное количество здоровья! 3-й слот`)
        .setFooter()
        .setTimestamp()

        if(health >= 91 & amount == 3 ) return message.channel.send(embed91hp)

        const embed96hp = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription(`${name}, У Вас максимальное количество здоровья! 2-й слот`)
        .setFooter()
        .setTimestamp()

        if(health >= 96 & amount == 2) return message.channel.send(embed96hp)

        const embedam = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription(`${name}, Укажите вид препарата для того чтобы воспользоваться им\n
        1. Обезболивающее\n2. Теблетки\n3. Антибиотик`)
        .setFooter()
        .setTimestamp()

        if(!amount) return message.channel.send(embedam)

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

        const embednouseall = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription(`${name}, У Вас нет ни единого вида препаратов для использования\n
        
        Вы можете преобрести желаемый препарат в Аптеке - **!аптека**`)
        .setFooter()
        .setTimestamp()

        if(obezb == 0 & tabl == 0 & anti == 0) return message.channel.send(embednouseall)

        const embednouse1 = new MessageEmbed()

        .setTitle('Лечение!')
        .setColor('RED')
        .setDescription(`${name}, У Вас нет Обезболивающего для использования.\n
        
        Вы можете преобрести желаемый препарат в Аптеке - **!аптека**`)
        .setFooter()
        .setTimestamp()

        if(amount == 1 & obezb == 0) return message.channel.send(embednouse1)

        const embednouse2 = new MessageEmbed()

        .setTitle('Лечение!')
        .setColor('RED')
        .setDescription(`${name}, У Вас нет Таблеток для использования.\n
        
        Вы можете преобрести желаемый препарат в Аптеке - **!аптека**`)
        .setFooter()
        .setTimestamp()

        if(amount == 2 & tabl == 0) return message.channel.send(embednouse2)

        const embednouse3 = new MessageEmbed()

        .setTitle('Лечение!')
        .setColor('RED')
        .setDescription(`${name}, У Вас нет Антибиотика для использования.\n
        
        Вы можете преобрести желаемый препарат в Аптеке - **!аптека**`)
        .setFooter()
        .setTimestamp()

        if(amount == 3 & anti == 0) return message.channel.send(embednouse3)

        const embeduse1 = new MessageEmbed()

        .setTitle('Лечение!')
        .setColor('RED')
        .setDescription(`${name}, Вы использовали Обезболивающее и пополнили здоровье на **1 HP**.\n
        
        Вы можете преобрести желаемый препарат в Аптеке - **!аптека**`)
        .setFooter()
        .setTimestamp()

        if(health <= 99 & amount == 1 & obezb >= 1) return message.channel.send(embeduse1)+client.addobezb(member.id, -1)+client.addhealth(member.id, +1)

        const embeduse2 = new MessageEmbed()

        .setTitle('Лечение!')
        .setColor('RED')
        .setDescription(`${name}, Вы использовали Таблетки и пополнили здоровье на **5 HP**\n
        
        Вы можете преобрести желаемый препарат в Аптеке - **!аптека**`)
        .setFooter()
        .setTimestamp()

        if(health <= 95 & amount == 2 & tabl >= 1) return message.channel.send(embeduse2)+client.addtabl(member.id, -1)+client.addhealth(member.id, +5)

        const embeduse3 = new MessageEmbed()

        .setTitle('Лечение!')
        .setColor('RED')
        .setDescription(`${name}, Вы использовали Антибиотик и пополнили здоровье на **10 HP**\n
        
        Вы можете преобрести желаемый препарат в Аптеке - **!аптека**`)
        .setFooter()
        .setTimestamp()

        if(health <= 90 & amount == 3 & anti >= 1) return message.channel.send(embeduse3)+client.addanti(member.id, -1)+client.addhealth(member.id, +10)
        

        // obezb >= 1



    }
}