const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'построить',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)
        
        const health = await client.health(member.id)

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

        if(health <= 70) return message.channel.send(embedhealth1)

        const doski = await client.doski(member.id)

        const kirp = await client.kirp(member.id)

        const name = await client.name(member.id)

        const house = await client.house(member.id)

        const bp = await client.bp(member.id)

        const cem = await client.cem(member.id)

        const embedhashouse = new MessageEmbed()
        
        .setTitle('Строительство запрещено!')
        .setColor('RED')
        .setDescription(`${name}, Вам отказано в постройке нового дома так как у Вас уже есть он!`)
        .setTimestamp()
        .setFooter('')
        .setImage('https://klike.net/uploads/posts/2020-01/1579858769_1.jpg')
        
        if(house == 1) return message.channel.send(embedhashouse)

        const embedend = new MessageEmbed()
        
        .setTitle('Строительство окончено!')
        .setColor('GREEN')
        .setDescription(`${name}, Поздравляем! Вы успешно окончили строительство дома. Теперь Вам доступно больше возможностей!`)
        .setTimestamp()
        .setFooter('')
        .setImage('https://klike.net/uploads/posts/2020-01/1579858769_1.jpg')
        
        if(bp == 500) return message.channel.send(embedend)+client.addhouse(member.id, 1)

        const embedall = new MessageEmbed()
        
        .setTitle('Строительство Дома')
        .setColor('RED')
        .setDescription(`У Вас нет **всех видов материалов** для постройки здания. Купить материалы Вы можете в Строительном Магазине.\n
        Команда для входа в меню строительного магазина - !строй-магазин .`)
        .setTimestamp()
        .setFooter('')
        
        if(!doski & !kirp & !cem) return message.channel.send(embedall)

        const embednodk = new MessageEmbed()
        
        .setTitle('Строительство Дома')
        .setColor('RED')
        .setDescription(`У Вас нет **Досок и Кирпичей** для постройки здания. Купить материалы Вы можете в Строительном Магазине.\n
        Команда для входа в меню строительного магазина - !строй-магазин .`)
        .setTimestamp()
        .setFooter('')
        
        if(!doski & !kirp) return message.channel.send(embednodk)

        const embednodoski = new MessageEmbed()
        
        .setTitle('Строительство Дома')
        .setColor('RED')
        .setDescription(`У Вас нет **Досок** для постройки здания. Купить материалы Вы можете в Строительном Магазине.\n
        Команда для входа в меню строительного магазина - !строй-магазин .`)
        .setTimestamp()
        .setFooter('')
        
        if(!doski) return message.channel.send(embednodoski)

        const embednokirp = new MessageEmbed()
        
        .setTitle('Строительство Дома')
        .setColor('RED')
        .setDescription(`У Вас нет **Кирпичей** для постройки здания. Купить материалы Вы можете в Строительном Магазине.\n
        Команда для входа в меню строительного магазина - !строй-магазин .`)
        .setTimestamp()
        .setFooter('')
        
        if(!kirp) return message.channel.send(embednokirp)

        const embednocem = new MessageEmbed()
        
        .setTitle('Строительство Дома')
        .setColor('RED')
        .setDescription(`У Вас нет **Цемента** для постройки здания. Купить материалы Вы можете в Строительном Магазине.\n
        Команда для входа в меню строительного магазина - !строй-магазин .`)
        .setTimestamp()
        .setFooter('')
        
        if(!cem) return message.channel.send(embednocem)

        const embedbuild1 = new MessageEmbed()

        .setTitle('Строительство Дома. Фундамент')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно увеличили прогресс строительства своего дома на 1 шаг\n
        Количество проделанных шагов к завершению постройки - **${bp+1}/500 шагов**\n
        Количество материалов для строительства:\n
        1. Доски - ${doski-1}\n2. Кирпичи - ${kirp-1}\n3. Цемент - ${cem-1}`)
        .setTimestamp()
        .setImage('https://srbu.ru/images/stroitelnye-materialy/vidy-fundamentov-dlya-chastnogo-doma/vidy-fundamentov-dlya-chastnogo-doma.jpg')
        .setFooter('')

        if(bp <= 100 & bp >= 1 & doski >= 1 & kirp >= 1 & cem >= 1) return message.channel.send(embedbuild1)+client.addbp(member.id, 1)+client.adddoski(member.id, -1)+client.addkirp(member.id, -1)+client.addcem(member.id, -1)

        const embedbuild2 = new MessageEmbed()

        .setTitle('Строительство Дома. Стены')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно увеличили прогресс строительства своего дома на 1 шаг\n
        Количество проделанных шагов к завершению постройки - **${bp+1}/500 шагов**\n
        Количество материалов для строительства:\n
        1. Доски - ${doski-1}\n2. Кирпичи - ${kirp-1}\n3. Цемент - ${cem-1}`)
        .setTimestamp()
        .setImage('https://kladembeton.ru/wp-content/uploads/2016/02/monolitnie-steny.jpg')
        .setFooter('')

        if(bp <= 200 & bp >= 101 & doski >= 1 & kirp >= 1 & cem >= 1) return message.channel.send(embedbuild2)+client.addbp(member.id, 1)+client.adddoski(member.id, -1)+client.addkirp(member.id, -1)+client.addcem(member.id, -1)

        const embedbuild3 = new MessageEmbed()

        .setTitle('Строительство Дома. Крыша')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно увеличили прогресс строительства своего дома на 1 шаг\n
        Количество проделанных шагов к завершению постройки - **${bp+1}/500 шагов**\n
        Количество материалов для строительства:\n
        1. Доски - ${doski-1}\n2. Кирпичи - ${kirp-1}\n3. Цемент - ${cem-1}`)
        .setTimestamp()
        .setImage('https://novakrovlya.ru/wp-content/uploads/2013/06/obreshetka-krishi.jpg')
        .setFooter('')

        if(bp <= 300 & bp >= 201 & kirp >= 1 & cem >= 1) return message.channel.send(embedbuild3)+client.addbp(member.id, 1)+client.adddoski(member.id, -1)+client.addkirp(member.id, -1)+client.addcem(member.id, -1)

        const embedbuild4 = new MessageEmbed()

        .setTitle('Строительство Дома. Интерьер')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно увеличили прогресс строительства своего дома на 1 шаг\n
        Количество проделанных шагов к завершению постройки - **${bp+1}/500 шагов**\n
        Количество материалов для строительства:\n
        1. Доски - ${doski-1}\n2. Кирпичи - ${kirp-1}\n3. Цемент - ${cem-1}`)
        .setTimestamp()
        .setImage('https://remont-f.ru/upload/iblock/86a/dizayn-interyera-doma-138-kv-m-foto-10-3861.jpg')
        .setFooter('')

        if(bp <= 400 & bp >= 301 & kirp >= 1 & cem >= 1) return message.channel.send(embedbuild4)+client.addbp(member.id, 1)+client.adddoski(member.id, -1)+client.addkirp(member.id, -1)+client.addcem(member.id, -1)

        const embedbuild5 = new MessageEmbed()

        .setTitle('Строительство Дома. Интерьер')
        .setColor('GREEN')
        .setDescription(`${name}, Вы успешно увеличили прогресс строительства своего дома на 1 шаг\n
        Количество проделанных шагов к завершению постройки - **${bp+1}/500 шагов**\n
        Количество материалов для строительства:\n
        1. Доски - ${doski-1}\n2. Кирпичи - ${kirp-1}\n3. Цемент - ${cem-1}`)
        .setTimestamp()
        .setImage('https://remont-f.ru/upload/iblock/86a/dizayn-interyera-doma-138-kv-m-foto-10-3861.jpg')
        .setFooter('')

        if(bp <= 500 & bp >= 401 & kirp >= 1 & cem >= 1) return message.channel.send(embedbuild5)+client.addbp(member.id, 1)+client.adddoski(member.id, -1)+client.addkirp(member.id, -1)+client.addcem(member.id, -1)
        

    }
}