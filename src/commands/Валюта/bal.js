const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'профиль',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 
        
        const member = message.mentions.members.first() || message.member

        let user = message.author

        const bal = await client.bal(member.id)

        const bank = await client.bank(member.id)

        const admin = await client.admin(member.id)

        const jobprog = await client.jobprogress(member.id)

        const stavka = await client.stavka(member.id)

        const msg = await message.channel.send(`📦 Загружаем данные профиля...`)

        const regist = await client.reg(member.id)

        const bit = await client.bitcoins(member.id)

        const house = await client.house(member.id)

        const bp = await client.bp(member.id)

        const energy = await client.energy(member.id)

        const car = await client.car(member.id)

        const name = await client.name(member.id)

        const vip = await client.vip(member.id)

        const banned = await client.banacc(member.id)

        const sum = bal + bank

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


        const embedvip0 = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
            .addField(`**Имя:**`, `${name}`)
            .addField(`**Денег в кошельке:**`, `${bal}$`, {inline: true})
            .addField(`**Банковский счёт:**`, `${bank}$`, )
            .addField(`**Биткоины:**`, `${bit} BTC`, {inline: true})
            .addField(`**VIP Стаутс:**`, `Неактивен`, {inline: true})
            .addField(`**Рабочий прогресс:**`, `${jobprog} ед.`, {inline: true}) // the verification level
            .addField(`**Количество фишек:**`, `${stavka} фишек`, {inline: true})
            .addField(`**Количество энергии:**`, `${energy} ед.`, {inline: true})
            .addField(`**Дом:**`, `Отсутствует | Прогресс строительства ${bp}/500`, {inline: true})
            .addField(`**Автомобиль:**`, `Отсутствует`, {inline: true})
            .addField(`**Общий размер денежных средств:**`, `${bal+bank}$`, {inline: true}) // when did the server got created 
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(vip == 0, car == 0, house == 0) return message.channel.send(embedvip0)+msg.delete();

        const embedvipnamehouse = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
            .addField(`**Имя:**`, `${name}`)
            .addField(`**Денег в кошельке:**`, `${bal}$`, {inline: true})
            .addField(`**Банковский счёт:**`, `${bank}$`, {inline: true})
            .addField(`**Биткоины:**`, `${bit} BTC`, {inline: true})
            .addField(`**VIP Стаутс:**`, `Активен`, {inline: true})
            .addField(`**Рабочий прогресс:**`, `${jobprog} ед.`, {inline: true}) // the verification level
            .addField(`**Количество фишек:**`, `${stavka} фишек`, {inline: true})
            .addField(`**Количество энергии:**`, `${energy} ед.`, {inline: true}) // how many times it got boosted
            .addField(`**Дом:**`, `Имеется`, {inline: true})
            .addField(`**Автомобиль:**`, `Отсутствует`, {inline: true})
            .addField(`**Общий размер денежных средств:**`, `${bal+bank}$`, {inline: true}) // when did the server got created 
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(vip == 1, car == 0, house == 1) return message.channel.send(embedvipnamehouse)+msg.delete();

        const embedvipname0 = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
            .addField(`**Имя:**`, `${name}`)
            .addField(`**Денег в кошельке:**`, `${bal}$`, {inline: true})
            .addField(`**Банковский счёт:**`, `${bank}$`, {inline: true})
            .addField(`**Биткоины:**`, `${bit} BTC`, {inline: true})
            .addField(`**VIP Стаутс:**`, `Активен`, {inline: true})
            .addField(`**Рабочий прогресс:**`, `${jobprog} ед.`, {inline: true}) // the verification level
            .addField(`**Количество фишек:**`, `${stavka} фишек`, {inline: true})
            .addField(`**Количество энергии:**`, `${energy} ед.`, {inline: true}) // how many times it got boosted
            .addField(`**Дом:**`, `Отсутствует | Прогресс строительства ${bp}/500`, {inline: true})
            .addField(`**Автомобиль:**`, `Отсутствует`, {inline: true})
            .addField(`**Общий размер денежных средств:**`, `${bal+bank}$`, {inline: true}) // when did the server got created 
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(vip == 1, car == 0, house == 0) return message.channel.send(embedvipname0)+msg.delete();

        const embedvipname = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
            .addField(`**Имя:**`, `${name}`)
            .addField(`**Денег в кошельке:**`, `${bal}$`, {inline: true})
            .addField(`**Банковский счёт:**`, `${bank}$`, {inline: true})
            .addField(`**Биткоины:**`, `${bit} BTC`, {inline: true})
            .addField(`**VIP Стаутс:**`, `Активен`, {inline: true})
            .addField(`**Рабочий прогресс:**`, `${jobprog} ед.`, {inline: true}) // the verification level
            .addField(`**Количество фишек:**`, `${stavka} фишек`, {inline: true})
            .addField(`**Количество энергии:**`, `${energy} ед.`, {inline: true}) // how many times it got boosted
            .addField(`**Дом:**`, `Имеется`, {inline: true})
            .addField(`**Автомобиль:**`, `Reno Logan`, {inline: true})
            .addField(`**Общий размер денежных средств:**`, `${bal+bank}$`, {inline: true}) // when did the server got created 
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(vip == 1, car == 1, house == 1) return message.channel.send(embedvipname)+msg.delete();

        const embedvipname2 = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
            .addField(`**Имя:**`, `${name}`)
            .addField(`**Денег в кошельке:**`, `${bal}$`, {inline: true})
            .addField(`**Банковский счёт:**`, `${bank}$`, {inline: true})
            .addField(`**Биткоины:**`, `${bit} BTC`, {inline: true})
            .addField(`**VIP Стаутс:**`, `Активен`, {inline: true})
            .addField(`**Рабочий прогресс:**`, `${jobprog} ед.`, {inline: true}) // the verification level
            .addField(`**Количество фишек:**`, `${stavka} фишек`, {inline: true})
            .addField(`**Количество энергии:**`, `${energy} ед.`, {inline: true}) // how many times it got boosted
            .addField(`**Дом:**`, `Имеется`, {inline: true})
            .addField(`**Автомобиль:**`, `Reno Scenic`, {inline: true})
            .addField(`**Общий размер денежных средств:**`, `${bal+bank}$`, {inline: true}) // when did the server got created 
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(vip == 1, car == 2, house == 1) return message.channel.send(embedvipname2)+msg.delete();

        const embedvipname3 = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
            .addField(`**Имя:**`, `${name}`)
            .addField(`**Денег в кошельке:**`, `${bal}$`, {inline: true})
            .addField(`**Банковский счёт:**`, `${bank}$`, {inline: true})
            .addField(`**Биткоины:**`, `${bit} BTC`, {inline: true})
            .addField(`**VIP Стаутс:**`, `Активен`, {inline: true})
            .addField(`**Рабочий прогресс:**`, `${jobprog} ед.`, {inline: true}) // the verification level
            .addField(`**Количество фишек:**`, `${stavka} фишек`, {inline: true})
            .addField(`**Количество энергии:**`, `${energy} ед.`, {inline: true}) // how many times it got boosted
            .addField(`**Дом:**`, `Имеется`, {inline: true})
            .addField(`**Автомобиль:**`, `Kia Rio`, {inline: true})
            .addField(`**Общий размер денежных средств:**`, `${bal+bank}$`, {inline: true}) // when did the server got created 
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(vip == 1, car == 3, house == 1) return message.channel.send(embedvipname3)+msg.delete();

        const embedvipname4 = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
            .addField(`**Имя:**`, `${name}`)
            .addField(`**Денег в кошельке:**`, `${bal}$`, {inline: true})
            .addField(`**Банковский счёт:**`, `${bank}$`, {inline: true})
            .addField(`**Биткоины:**`, `${bit} BTC`, {inline: true})
            .addField(`**VIP Стаутс:**`, `Активен`, {inline: true})
            .addField(`**Рабочий прогресс:**`, `${jobprog} ед.`, {inline: true}) // the verification level
            .addField(`**Количество фишек:**`, `${stavka} фишек`, {inline: true})
            .addField(`**Количество энергии:**`, `${energy} ед.`, {inline: true}) // how many times it got boosted
            .addField(`**Дом:**`, `Имеется`, {inline: true})
            .addField(`**Автомобиль:**`, `Hyundai Solaris`, {inline: true})
            .addField(`**Общий размер денежных средств:**`, `${bal+bank}$`, {inline: true}) // when did the server got created 
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(vip == 1, car == 4, house == 1) return message.channel.send(embedvipname4)+msg.delete();

        const embedvipname5 = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
            .addField(`**Имя:**`, `${name}`)
            .addField(`**Денег в кошельке:**`, `${bal}$`, {inline: true})
            .addField(`**Банковский счёт:**`, `${bank}$`, {inline: true})
            .addField(`**Биткоины:**`, `${bit} BTC`, {inline: true})
            .addField(`**VIP Стаутс:**`, `Активен`, {inline: true})
            .addField(`**Рабочий прогресс:**`, `${jobprog} ед.`, {inline: true}) // the verification level
            .addField(`**Количество фишек:**`, `${stavka} фишек`, {inline: true})
            .addField(`**Количество энергии:**`, `${energy} ед.`, {inline: true}) // how many times it got boosted
            .addField(`**Дом:**`, `Имеется`, {inline: true})
            .addField(`**Автомобиль:**`, `Ford Fiesta`, {inline: true})
            .addField(`**Общий размер денежных средств:**`, `${bal+bank}$`, {inline: true}) // when did the server got created 
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('')
        .setImage('https://i.imgur.com/aKO1CPQ.jpg')

        if(vip == 1, car == 5, house == 1) return message.channel.send(embedvipname5)+msg.delete();

    }
}