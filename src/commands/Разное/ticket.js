const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'тикет',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKETS")

        const member = message.mentions.members.first() || message.member
    
        if(!categoryID) return;
    
        const userName = message.author.username;

        const name = await client.name(member.id)
    
        const userDiscriminator = message.author.discriminator;
    
        const ticketexist = false;
    
        message.guild.channels.cache.forEach(channel => {
    
            if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
    
                ticketexist = true;
    
                return;
            }
        });
    
        if(ticketexist) return;
    
        message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
            (createdChannel) => {
    
                createdChannel.setParent(categoryID).then(
                    (settedParent) => {
    
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });
    
                        settedParent.updateOverwrite(message.author.id,{
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                            CREATE_INSTANT_INVITE: true,
                            READ_MESSAGES: true,
                            ATTACH_FILES: true,
                            CONNECT: true,
                            ADD_REACTIONS: true,
                            READ_MESSAGE_HISTORY: true
                        });
    
                        const ticketEmbed = new MessageEmbed()


                        .setTitle(`Ваш тикет! Здравствуйте, ${name}`)
                        .setColor('BLUE')
                        .setDescription('Напишите сюда Ваш вопрос/обращение и в ближайшее время разработчик его рассмотрит и даст ответ!')
                        .setTimestamp()
                        .setFooter('Версия - 1.1')

                        settedParent.send(ticketEmbed)
                    }
                ).catch(err => {
                    return console.log(err)
                });
            }
        ).catch(err => {
            return console.log(err)
        });

    }
}