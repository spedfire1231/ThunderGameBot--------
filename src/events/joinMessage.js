const client = require('../../src/index');
const { MessageEmbed } = require('discord.js');

client.on("guildCreate", (guild) => {
    let channelToSend;

    guild.channels.cache.forEach((channel) => {
        if(
            channel.type === "text" &&
            !channelToSend && 
            channel.permissionsFor(guild.me).has("SEND_MESSAGES")
        ) 
            channelToSend = channel;
    });

    if(!channelToSend) return;

    channelToSend.send(
        new MessageEmbed()
            //.setTitle(`Приглашение на сервер - thunderBOT`)
            .setAuthor(guild.name)
            .setDescription(`**Здравствуйте! На связи .thunderBOT**\n
            Префикс бота - **t!**\n
            Спасибо за приглашение, мы теперь с Вами. Разработчик благодарит Вас за приглашение меня на Ваш игровой сервер, теперь Вы можете пользоваться моим функционалом\n
            Для более детальной информации по командам пропишите - **!помощь**\n
            
            Хотим сразу предупредить чтобы начать играть в бота Вас следует зарегистрироваться с помощью команды - !старт [Ваш игровой ник]\n
            
            Желаем удачи!`)
            .setColor('GREEN')
            .setFooter('Powered by .thunder')
            .setTimestamp()
    );
});