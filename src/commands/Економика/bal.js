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

        let user = message.author.id

        const bal = await client.bal(member.userId)

        const bank = await client.bank(member.id)

<<<<<<< HEAD
        const name = await client.name(member.id)

        const bit = await client.bitcoins(member.id)

        const vip = await client.vip(member.id)

        const sum = bal + bank

        const embedname0 = new MessageEmbed()

        .setTitle(`Ваш Баланс:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество биткоинов - **${bit} BTC**\nVIP статус - **Неактивен**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.2')

        if(name == undefined && vip == 0) return message.channel.send(embedname0);

        const embedname1 = new MessageEmbed()

        .setTitle(`Ваш Баланс:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество биткоинов - **${bit} BTC**\nVIP статус - **Активен**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.2')

        if(name == undefined && vip == 1) return message.channel.send(embedname1);

        const embed = new MessageEmbed()

        .setTitle(`${name}, Ваш Баланс:`)
        .setColor('BLUE')
        .setDescription(`${name} В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nКоличество биткоинов - **${bit} BTC**\nVIP статус - **Неактивен**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.2')

        if(vip == 0) return message.channel.send(embed);

=======
        const sum = bal + bank

>>>>>>> 2b8e3f798a5b038a5b162c1bb2c6a5be5a0f6433
        const embedvip = new MessageEmbed()

        .setTitle(`${name}, Ваш Баланс:`)
        .setColor('BLUE')
        .setDescription(`В Вашем кошельке - **${bal}$**\nНа Вашем банковском счету - **${bank}$**\nОбщий размер Ваших средств - **${sum}$**`)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter('Версия - 0.2')

        return message.channel.send(embedvip);

    }
}