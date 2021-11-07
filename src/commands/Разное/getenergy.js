const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'получить-энергию',
    cooldown: 1000 * 60 * 60 * 6, // 6 часов

    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const vip = await client.vip(member.id)

        const name = await client.name(member.id)

        const banned = await client.banacc(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        

        if(regist === 0) return message.channel.send(embedreg1)

        const embedban1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваш игровой аккаунт заблокирование администратором бота! Если Вы уверенны, что это ошибочный бан обратитесь к разработчику!')
        .setTimestamp()
        

        if(banned === 1) return message.channel.send(embedban1)

        const embed = new MessageEmbed()
        
        .setTitle('Получена Энергия!')
        .setColor('BLUE')
        .setDescription(`${name}, Вы получили 20 энергии, теперь Вы можете начать или продолжить работать либо снова ограбить банк.\n
        Следующий раз Вы сможете получить энергию через 6 часов`)
        .setTimestamp()
        .setFooter(``)
        
        if(vip == 0) return message.channel.send(embed)+client.addenergy(member.id, 20)

        const embed1 = new MessageEmbed()
        
        .setTitle('[VIP] Получена Энергия!')
        .setColor('BLUE')
        .setDescription(`${name}, Вы получили **40 энергии** так как у Вас привелегия - **VIP**, теперь Вы можете начать или продолжить работать либо снова ограбить банк.\n
        Следующий раз Вы сможете получить энергию через 6 часов`)
        .setTimestamp()
        .setFooter(``)
        
        if(vip == 1) return message.channel.send(embed1)+client.addenergy(member.id, 40)
        

    }
}