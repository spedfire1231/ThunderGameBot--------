const{ Client, Message, MessageEmbed } = require('discord.js')

const items = require ('../../shopitems')

module.exports = {
    name: 'магазин',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 


        if(!items.length === 0) return message.reply('Нет предметов для продажи')

        const shoplist = items

        .map((value, index) => {
            return `**${index+1}** ${value.item} -> ${value.price} coins!`
        });

        const shopembed = new MessageEmbed()

        .setTitle('Магазин имущества:')
        .setColor('BLUE')
        .setDescription('**Доступное имущество для покупки:**\n **1.** Дом - 100$(Временно)\n**2.** Автомобиль - 150$(Временно)\n **3.** Квартира - 200$(Временно)\nДля покупки введите команду - **!buy**')
        .setTimestamp()
        .setFooter('Версия - 0.1 ВЕТА')

        message.channel.send(shopembed);

    }
}