const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ограб-старт',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const health = await client.health(member.id)

        const embedreg1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Вы не зарегестрированы!\nДля регистрации нового аккаунта введите - **!старт [Ваш игровой ник]**\nПосле регистрации Вам будут доступны команды бота!')
        .setTimestamp()
        .setFooter('')

        if(regist === 0) return message.channel.send(embedreg1)

        const embedhealth1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваше состояние здоровья не позволяет использовать данную команду!')
        .setTimestamp()
        .setFooter('')

        if(health <= 60) return message.channel.send(embedhealth1)

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

        if(bankrob == 2) return message.channel.send('Вы не можете приступить ко второй фазе пока не начали ограбление банка')

        if(bankrob == 3) return message.channel.send('Вы не можете приступить к третьей фазе пока не начали ограбление банка')

        const embedtwostep = new MessageEmbed()
        
        .setTitle('Ошибка! Ограбление Банка')
        .setColor('RED')
        .setDescription(`Вы уже можете перейти на вторую фазу ограбления!\n
        Команда для перехода на вторую фазу - **!ограб-начать2**`)
        .setTimestamp()
        .setFooter('')
        

        if(robprog == 10) return message.channel.send(embedtwostep)

        const result = Math.floor(Math.random() * 10) + 1;

        if (result == 1 && bankrob == 1) {
            
            const embedone = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы подобрали кейс для денег и пошли дальше: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedone)+client.addrobprog(member.id, 1)
        }

        if (result == 2 && bankrob == 1) {
            const embedtwo = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы взяли перчатки и пошли дальше: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedtwo)+client.addrobprog(member.id, 1)
        }

        if (result == 3 && bankrob == 1) {
            const embedthree = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы подобрали дрель и положили в сумку после чего пошли дальше: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedthree)+client.addrobprog(member.id, 1)
        }

        if (result == 4 && bankrob == 1) {
            const embedfour = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы подобрали большую сумку для денег и пошли дальше: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedfour)+client.addrobprog(member.id, 1)
        }

        if (result == 5 && bankrob == 1) {
            const embedfive = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы подобрали молоток и пошли дальше: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedfive)+client.addrobprog(member.id, 1)
        }

        if (result == 6 && bankrob == 1) {
            const embedsix = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы взяли пистолет и пошли дальше: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedsix)+client.addrobprog(member.id, 1)
        }

        if (result == 7 && bankrob == 1) {
            const embedseven = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы взяли дробовик и пошли дальше: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedseven)+client.addrobprog(member.id, 1)
        }

        if (result == 8 && bankrob == 1) {
            const embedeight = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы взяли маску для лица и пошли дальше: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedeight)+client.addrobprog(member.id, 1)
        }

        if (result == 9 && bankrob == 1) {
            const embednine = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы взяли бронежилет и пошли дальше: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embednine)+client.addrobprog(member.id, 1)
        }

        if (result == 10 && bankrob == 1) {
            const embedten = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы позвали несколько знакомых и они согласились: **${robprog+1}/10**\n
            Когда у Вас будет собрано 10 предметов Вы сможете перейти на вторую фазу ограбления\n
            Команда для перехода на вторую фазу - **!ограб-начать2**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedten)+client.addrobprog(member.id, 1)
        }

    }
}