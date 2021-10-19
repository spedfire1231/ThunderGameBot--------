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

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const banned = await client.banacc(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(banned === 1) return message.channel.send(embedban1)

        if(!items.length === 0) return message.reply('Нет предметов для продажи')

        const shoplist = items

        .map((value, index) => {
            return `**${index+1}** ${value.item} ->  ${value.price} coins!`
        });

        const shopembed = new MessageEmbed()

        .setTitle('Магазин имущества:')
        .setColor('BLUE')
        .setDescription('**Доступное имущество для покупки:**\n **1.** Дом - 75000$\n**2.** Автомобиль - 50000$\n **3.** Квартира - 50000$\nДля покупки введите команду - **!купить**')
        .setTimestamp()
        .setFooter('Версия - 0.2')

        message.channel.send(shopembed);

    }
}