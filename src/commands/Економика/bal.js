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

        const regist = await client.reg(member.id)

        const bit = await client.bitcoins(member.id)

        const name = await client.name(member.id)

        const vip = await client.vip(member.id)

        const sum = bal + bank

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedvipname = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество BTC - **${bit}**\nVIP Статус - **Неактивен**\nРабочий прогресс: ${jobprog}\nОбщий размер Ваших средств - **${sum}$**
        \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.3')

        if(vip == 0 && name === 'unnamed') return message.channel.send(embedvipname);

        const embedname2 = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество BTC - **${bit}**\nVIP Статус - **Неактивен**Рабочий прогресс: **${jobprog} ед.**\nОбщий размер Ваших средств - **${sum}$**
        \n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.3')

        if(vip == 1 && name === 'unnamed') return message.channel.send(embedname2);

        const embedvip = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество BTC - **${bit}**\nVIP Статус - **Неактивен**\nРабочий прогресс: **${jobprog} ед.**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.3')

        if(vip == 0) return message.channel.send(embedvip);

        const embedvip1 = new MessageEmbed()

        .setTitle(`Профиль игрока - **${name}**:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество BTC - **${bit}**\nVIP Статус - **Активен**\nРабочий прогресс: **${jobprog} ед.**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.3')

        if(vip == 1) return message.channel.send(embedvip1);

    }
}