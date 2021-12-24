const{ Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'автосалон-эконом',

    /**
    *@param {Client} client
    *@param {Message} message
    *@param {String[]} args
    */

    run: async (client,message,args) => { 

        const member = message.mentions.members.first() || message.member

        const regist = await client.reg(member.id)

        const name = await client.name(member.id)

        const health = await client.health(member.id)

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
        .setFooter('')

        if(banned === 1) return message.channel.send(embedban1)

        const embedhealth1 = new MessageEmbed()

        .setTitle('Ошибка!')
        .setColor('RED')
        .setDescription('Ваше состояние здоровья не позволяет использовать данную команду!')
        .setTimestamp()
        .setFooter('')

        if(health <= 80) return message.channel.send(embedhealth1)

        let selectcar = args[0]

        //let colorcar = args[1]

        const embedarg0 = new MessageEmbed()

        .setTitle('Подсказка')
        .setColor('BLUE')
        .setDescription(`${name}, Выберите автомобиль со списка ниже:\n
        1. Reno Logan - 50.000$\n2. Reno Scenic - 55.000$\n3. Kia Rio - 60.000$\n4. Hyundai Solaris - 70.000$\n5. Ford Fiesta - 85.000$`)
        .setFooter('')
        .setImage('https://fainaidea.com/wp-content/uploads/2018/10/6-2.jpg')

        if(!selectcar) return message.channel.send(embedarg0)

        /*const embedarg1 = new MessageEmbed()

        .setTitle('Подсказка')
        .setColor('BLUE')
        .setDescription(`Выберите цвет автомобиля:\n
        1. Черный\n2. Белый\n3. Красный\n4. Желтый\n5. Синий\n6. Фиолетовый\n7. Голубой\n8. Оранжевый`)
        .setFooter('')
        .setImage('https://fainaidea.com/wp-content/uploads/2018/10/6-2.jpg')

        if(!colorcar) return message.channel.send(embedarg1)*/

        const embedbuy1 = new MessageEmbed()
        
        .setTitle('Автосалон')
        .setColor('GREEN')
        .setDescription(`${name}, Вы преобрели автомобиль марки **Reno Logan** за **50.000$**\n
        Поздравляем с покупкой! Приятной игры!`)
        .setTimestamp()
        .setFooter('')
        .setImage('https://fainaidea.com/wp-content/uploads/2018/10/6-2.jpg')
        
        if(selectcar == 1) return message.channel.send(embedbuy1)+client.add(member.id, -50000)+client.addcar(member.id, 1)

        const embedbuy2 = new MessageEmbed()
        
        .setTitle('Автосалон')
        .setColor('GREEN')
        .setDescription(`${name}, Вы преобрели автомобиль марки **Reno Scenic** за **55.000$**\n
        Поздравляем с покупкой! Приятной игры!`)
        .setTimestamp()
        .setFooter('')
        .setImage('https://fainaidea.com/wp-content/uploads/2018/10/6-2.jpg')
        
        if(selectcar == 2) return message.channel.send(embedbuy2)+client.add(member.id, -55000)+client.addcar(member.id, 2)

        const embedbuy3 = new MessageEmbed()
        
        .setTitle('Автосалон')
        .setColor('GREEN')
        .setDescription(`${name}, Вы преобрели автомобиль марки **Kia Rio** за **60.000$**\n
        Поздравляем с покупкой! Приятной игры!`)
        .setTimestamp()
        .setFooter('')
        .setImage('https://fainaidea.com/wp-content/uploads/2018/10/6-2.jpg')
        
        if(selectcar == 3) return message.channel.send(embedbuy3)+client.add(member.id, -60000)+client.addcar(member.id, 3)

        const embedbuy4 = new MessageEmbed()
        
        .setTitle('Автосалон')
        .setColor('GREEN')
        .setDescription(`${name}, Вы преобрели автомобиль марки **Huyndai Solaris** за **70.000$**\n
        Поздравляем с покупкой! Приятной игры!`)
        .setTimestamp()
        .setFooter('')
        .setImage('https://fainaidea.com/wp-content/uploads/2018/10/6-2.jpg')
        
        if(selectcar == 4) return message.channel.send(embedbuy4)+client.add(member.id, -70000)+client.addcar(member.id, 4)

        const embedbuy5 = new MessageEmbed()
        
        .setTitle('Автосалон')
        .setColor('GREEN')
        .setDescription(`${name}, Вы преобрели автомобиль марки **Ford Fiesta** за **85.000$**\n
        Поздравляем с покупкой! Приятной игры!`)
        .setTimestamp()
        .setFooter('')
        .setImage('https://fainaidea.com/wp-content/uploads/2018/10/6-2.jpg')
        
        if(selectcar == 5) return message.channel.send(embedbuy5)+client.add(member.id, -85000)+client.addcar(member.id, 5)
        

    }
}