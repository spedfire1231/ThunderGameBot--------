const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ограб-старт2',
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

        if(bankrob == 3) return message.channel.send('Вы не можете приступить к третьей фазе пока не начали ограбление банка')

        const embedtwostep = new MessageEmbed()
        
        .setTitle('Ошибка! Ограбление Банка')
        .setColor('RED')
        .setDescription(`Вы уже можете перейти на третью фазу ограбления!\n
        Команда для перехода на третью фазу - **!ограб-начать3**`)
        .setTimestamp()
        .setFooter('')
        

        if(robprog == 0) return message.channel.send(embedtwostep)

        const result = Math.floor(Math.random() * 10) + 1;

        if (result == 1 && bankrob == 2) {
            
            const embedone = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы взломали банковскую ечейку и положили деньги в сумку : **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedone)+client.addrobprog(member.id, -1)
        }

        if (result == 2 && bankrob == 2) {
            const embedtwo = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы уничтожили одного из охранников: **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedtwo)+client.addrobprog(member.id, -1)
        }

        if (result == 3 && bankrob == 2) {
            const embedthree = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы взяли дрель и начали пробивать одну из стен: **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedthree)+client.addrobprog(member.id, -1)
        }

        if (result == 4 && bankrob == 2) {
            const embedfour = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы взяли сотрудника банка в заложники: **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedfour)+client.addrobprog(member.id, -1)
        }

        if (result == 5 && bankrob == 2) {
            const embedfive = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы вырубили работника банка молотком и сломали одну из кнопок вызова полиции: **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedfive)+client.addrobprog(member.id, -1)
        }

        if (result == 6 && bankrob == 2) {
            const embedsix = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы дробовиком прострелили замки для сейфов: **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedsix)+client.addrobprog(member.id, -1)
        }

        if (result == 7 && bankrob == 2) {
            const embedseven = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: С помощью пистолета вы смогли заставить сотрудника банка открыть все банковские ячейки: **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedseven)+client.addrobprog(member.id, -1)
        }

        if (result == 8 && bankrob == 2) {
            const embedeight = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы со своими подельниками выключили все камеры банка: **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedeight)+client.addrobprog(member.id, -1)
        }

        if (result == 9 && bankrob == 2) {
            const embednine = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: У вас началась перестрелка с работниками банка но Вы смогли справиться: **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embednine)+client.addrobprog(member.id, -1)
        }

        if (result == 10 && bankrob == 2) {
            const embedten = new MessageEmbed()
    
            .setTitle('Ограбление банка')
            .setColor('GREEN')
            .setDescription(`Вы начали ограбление банка!\n
            Информация об ограблении: Вы выкинули свой бронежилет и надели новый: **${robprog-1}/10**\n
            После 10-и действий ограбления Вы сможете перейти на третью фазу\n
            Команда для перехода на третью фазу - **!ограб-начать3**!`)
            .setTimestamp()
            .setFooter('')
    
            message.channel.send(embedten)+client.addrobprog(member.id, -1)
        }

    }
}