const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ограб-старт3',
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

        const bankrob = await client.bankrob(member.id)

        const robprog = await client.robprog(member.id)

        if(bankrob == 0) return message.channel.send('Вы не можете приступить к первой фазе пока не начали ограбление банка')

        if(bankrob == 1) return message.channel.send('Вы не можете приступить ко второй фазе пока не начали ограбление банка')

        if(bankrob == 2) return message.channel.send('Вы не можете приступить к третьей фазе пока не начали ограбление банка')

        if(robprog == 10) return message.channel.send('Вы успешно ограбили банк и получили вознаграждение')+client.add(member.id, 50000)+client.addbankrob(member.id, 0)+client.addrobprog(member.id, -10)

        const result = Math.floor(Math.random() * 6) + 1;

        if (result == 1 && bankrob == 3) {
            
            const embedone = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы заканчиваете ограбление банка!\n
            Информация об ограблении: Вы скрываетесь от полицейской машины : **${robprog+1}/10**\n
            После 10-и последних действий ухода от полиции Вы получите вознаграждени\n
            После того как выполните 10-е действие повторите команду ещё раз чтобы забрать вознаграждение!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedone)+client.addrobprog(member.id, 1)
        }

        if (result == 2 && bankrob == 3) {
            const embedtwo = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы заканчиваете ограбление банка!\n
            Информация об ограблении: Вы подстрелили колесо полицейской машины и ушли от погони: **${robprog+1}/10**\n
            После 10-и последних действий ухода от полиции Вы получите вознаграждение\n
            После того как выполните 10-е действие повторите команду ещё раз чтобы забрать вознаграждение!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedtwo)+client.addrobprog(member.id, 1)
        }

        if (result == 3 && bankrob == 3) {
            const embedthree = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы заканчиваете ограбление банка!\n
            Информация об ограблении: За вами летел вертолёт но вы ушли от него: **${robprog+1}/10**\n
            После 10-и последних действий ухода от полиции Вы получите вознаграждение\n
            После того как выполните 10-е действие повторите команду ещё раз чтобы забрать вознаграждение!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedthree)+client.addrobprog(member.id, 1)
        }

        if (result == 4 && bankrob == 3) {
            const embedfour = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы заканчиваете ограбление банка!\n
            Информация об ограблении: Вы подрезали полицейскую машину и ушли от погони: **${robprog+1}/10**\n
            После 10-и последних действий ухода от полиции Вы получите вознаграждение\n
            После того как выполните 10-е действие повторите команду ещё раз чтобы забрать вознаграждение!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedfour)+client.addrobprog(member.id, 1)
        }

        if (result == 5 && bankrob == 3) {
            const embedfive = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы заканчиваете ограбление банка!\n
            Информация об ограблении: Ваша машина сломалась и вы украли другую: **${robprog+1}/10**\n
            После 10-и последних действий ухода от полиции Вы получите вознаграждение\n
            После того как выполните 10-е действие повторите команду ещё раз чтобы забрать вознаграждение!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedfive)+client.addrobprog(member.id, 1)
        }

        if (result == 6 && bankrob == 3) {
            const embedsix = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы заканчиваете ограбление банка!\n
            Информация об ограблении: Вы скрывались от полиции и уничтожили одного полицейского который за Вами бежал: **${robprog+1}/10**\n
            После 10-и последних действий ухода от полиции Вы получите вознаграждение\n
            После того как выполните 10-е действие повторите команду ещё раз чтобы забрать вознаграждение!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedsix)+client.addrobprog(member.id, 1)
        }

    }
}