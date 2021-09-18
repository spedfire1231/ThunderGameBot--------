const{ Client, Message, MessageEmbed } = require('discord.js')

const inventory = require('../../models/inventory')

const items = require('../../shopitems')

module.exports = {
    name: 'купить',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member

        const embed1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Пожалуйста выберите предмет! Команда **!магазин**')
        .setFooter('Версия - 0.2')
        .setTimestamp()

        if(!args[0]) return message.channel.send(embed1)
        const itemToBuy = args[0].toLowerCase()

        const validItem = !!items.find((val) => val.item === itemToBuy);

        const embed2 = new MessageEmbed()
        
        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Предмет который Вы хотите купить не сущетствует!')
        .setFooter('Версия - 0.2')
        .setTimestamp()

        if(!validItem) return message.channel.send(embed2)

        const itemPrice = items.find((val) => (val.item.toLowerCase()) === itemToBuy).price

        const userBalance = await client.bal(message.author.id)

        const name = await client.name(member.id)

        const embed3 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription(`У вас есть только **${userBalance}$**, цена данного предмета **${itemPrice}$**`)
        .setFooter('Версия - 0.2')
        .setTimestamp()

        if(userBalance < itemPrice) return message.channel.send(embed3)



        const params = {
            Guild: message.guild.id,
            User: message.author.id,
        }
        inventory.findOne(params, async(err, data) => {
            if(data) {
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy)
                if(!hasItem) {
                    data.Inventory[itemToBuy] = 1
                } else {
                    data.Inventory[itemToBuy]++
                }
                console.log(data);
                await inventory.findOneAndUpdate(params, data)
            } else {
                new inventory({
                    Guild: message.guild.id,
                    User: message.author.id,
                    Inventory: {
                        [itemToBuy]: 1,
                    }
                }).save()
            }

            const embedname = new MessageEmbed()

            .setTitle('Успешно!')
            .setColor('GREEN')
            .setDescription(`Вы купили ${itemToBuy}\n\n\nУ Вас не установлен никнейм, сделать вы его можете командой **!addname**`)
            .setFooter('Версия - 0.2')
            .setTimestamp()

            if(name === 'unnamed') return message.channel.send(embedname)

            const embed4 = new MessageEmbed()

            .setTitle('Успешно!')
            .setColor('GREEN')
            .setDescription(`${name}, Вы купили ${itemToBuy}`)
            .setFooter('Версия - 0.2')
            .setTimestamp()

            message.channel.send(embed4)
            client.rmv(message.author.userId, itemPrice)
        })
    }
}