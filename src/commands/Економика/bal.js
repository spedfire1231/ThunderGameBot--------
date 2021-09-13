const{ Client, Message, MessageEmbed } = require('discord.js')

const inventory = require('../../models/inventory')

module.exports = {
    name: 'баланс',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 
        
        const member = message.mentions.members.first() || message.member

        let user = message.author

        const bal = await client.bal(member.userId)

        const bank = await client.bank(member.id)

        const bit = await client.bitcoins(member.id)

        const name = await client.name(member.id)

        const vip = await client.vip(member.id)

        const sum = bal + bank

        const embedvipname = new MessageEmbed()

        .setTitle(`Ваш Баланс:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество BTC - **${bit}**\nVIP Статус - **Неактивен**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.3')

        if(vip == 0 && name == undefined) return message.channel.send(embedvipname);

        const embedvip = new MessageEmbed()

        .setTitle(`${name}, Ваш Баланс:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество BTC - **${bit}**\nVIP Статус - **Неактивен**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.3')

        if(vip == 0) return message.channel.send(embedvip);

        const embedname = new MessageEmbed()

        .setTitle(`Ваш Баланс:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество BTC - **${bit}**\nVIP Статус - **Активен**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.3')

        if(vip == 1 & name == undefined) return message.channel.send(embedname);

        const embedvip1 = new MessageEmbed()

        .setTitle(`${name}, Ваш Баланс:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество BTC - **${bit}**\nVIP Статус - **Активен**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.3')

        if(vip == 1) return message.channel.send(embedvip1);

    }
}