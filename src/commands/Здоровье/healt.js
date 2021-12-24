const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'здоровье',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const banned = await client.banacc(member.id)

        const obezb = await client.obezb(member.id)

        const tabl = await client.tabl(member.id)

        const anti = await client.anti(member.id)

        const health = await client.health(member.id)

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

        const embed1hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        Ваше состояние в критическом положении, срочно пройдите курс лечения!\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**\n
        **Не доступно:\n1. Автосалон\n2. Строительство\n3. Ограбление банка\n4. Казино\n5. Биткоины\n6. Работа**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 10 & health >= 1) return message.channel.send(embed1hp)

        const embed10hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        Ваше состояние в критическом положении, срочно пройдите курс лечения!\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**\n
        **Не доступно:\n1. Автосалон\n2. Строительство\n3. Ограбление банка\n4. Казино\n5. Биткоины**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 20 & health >= 11) return message.channel.send(embed10hp)

        const embed20hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        Ваше состояние в критическом положении, срочно пройдите курс лечения!\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**\n
        **Не доступно:\n1. Автосалон\n2. Строительство\n3. Ограбление банка\n4. Казино\n5. Биткоины**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 30 & health >= 21) return message.channel.send(embed20hp)

        const embed30hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        У Вас плохое состояние здоровья, желательно пройдите курс лечения.\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**\n
        **Не доступно:\n1. Автосалон\n2. Строительство\n3. Ограбление банка\n4. Казино**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 40 & health >= 31) return message.channel.send(embed30hp)

        const embed40hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        У Вас плохое состояние здоровья, желательно пройдите курс лечения.\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**\n
        **Не доступно:\n1. Автосалон\n2. Строительство\n3. Ограбление банка\n4. Казино**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 50 & health >= 41) return message.channel.send(embed40hp)

        const embed50hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        У Вас плохое состояние здоровья, желательно пройдите курс лечения.\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**\n
        **Не доступно:\n1. Автосалон\n2. Строительство\n3. Ограбление банка**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 60 & health >= 51) return message.channel.send(embed50hp)

        const embed60hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        У Вас плохое состояние здоровья, желательно пройдите курс лечения.\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**\n
        **Не доступно:\n1. Автосалон\n2. Строительство**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 70 & health >= 61) return message.channel.send(embed60hp)

        const embed70hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        У Вас плохое состояние здоровья, желательно пройдите курс лечения.\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**\n
        **Не доступно:\n1. Автосалон**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 80 & health >= 71) return message.channel.send(embed70hp)

        const embed80hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        У Вас плохое состояние здоровья, желательно пройдите курс лечения.\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 90 & health >= 81) return message.channel.send(embed80hp)

        const embed90hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        Ваше состояние в хорошей форме.\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health <= 99 & health >= 91) return message.channel.send(embed90hp)

        const embed100hp = new MessageEmbed()
        
        .setTitle('🏥 Состояние здоровья')
        .setColor('GREEN')
        .setDescription(`${name}, состояние Вашего здоровья - **${health} HP**\n
        Ваше состояние в полном порядке.\n
        Для прохождения курса лечения Вы можете купить предметы для лечения в Аптеке - **!аптека**\n
        В Вашей аптечке:\n1. Обезболивающее - **${obezb} ед.**\n2. Таблетки - **${tabl} ед.**\n3. Антибиотик - **${anti} ед.**`)
        .setTimestamp()
        .setFooter('Версия - ')
        .setImage('https://www.coe.int/documents/365513/10877703/HRC-right-to-health-870x489.jpg/610146d8-7edd-438f-6a57-e03dbaf8c384')
        
        if(health >= 100) return message.channel.send(embed100hp)
        

    }
}