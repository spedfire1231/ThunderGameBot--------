const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ограб-начать',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(regist === 0) return message.channel.send(embedreg1)

        const banned = await client.banacc(member.id)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        .setFooter('Версия - 0.4')

        if(banned === 1) return message.channel.send(embedban1)

        const bankrob = await client.bankrob(member.id)

        if(bankrob == 1) return message.channel.send('Вы уже начали ограбление банка')

        if(bankrob == 2) return message.channel.send('Вы уже начали ограбление банка')

        if(bankrob == 3) return message.channel.send('Вы уже начали ограбление банка')

        const embed = new MessageEmbed()
        
        .setTitle('Ограбление банка')
        .setColor('GREEN')
        .setDescription(`Вы начали ограбление банка!\n
        Информация об ограблении:\nЕсть 3 фазы ограбления. Первая фаза это фаза подготовки, Вам нужно собрать со своего склада все предметы ограбления,
        после чего отправиться в банк и начать вторую фазу.\n
        Вторая фаза ограбления это само ограбление, заход в здание, взломы сейфов и получение денег.\n
        Ну и третья фаза это покинуть здание банка и отправиться в свой склад чтобы спрятать украденные деньги.\n
        Но учтите тот момент, что при ограблении банка Ваш рабочий прогресс будет снижен на 50, не зависимо от того сколько его у Вас. При нулевом значении рабочего прогресса у Вас будет по логике **-50 JP**\nПриятного ограбления :)`)
        .setTimestamp()
        .setFooter('Версия - 1.0')
        
        if(bankrob == 0) return message.channel.send(embed)+client.addbankrob(member.id, 1)

    }
}