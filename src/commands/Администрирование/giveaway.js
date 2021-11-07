const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'конкурс',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return channel.reply("You don't have permission to use this command!");

        // if no time said send thi
        
        // =giveaway 1h 1 tshirt / if the time doesn't end with h /s /d /m  send this 
        if(args[0].endsWith("s")&&args[0].endsWith("h")&&args[0].endsWith("d")&&args[0].endsWith("m")) return message.channel.send(`**Сколько будет длиться конкурс?**`)
    
        // winner count 
        let winnerCount = args[1]
        
        // getting the whole prize
        let prize = args.slice(2).join(" ")
        
        // if no amount of winner said
        if(!args[1]) return message.channel.send(`**Сколько человек может победить?**`)
        
        // if no prize said
        if(!args[2]) return message.channel.send(`**Какой приз?**`)
        
        // deleting the msg u send then...
        message.delete()
        
        // creating the giveaway embed
        var botEmbed = new MessageEmbed()
         .setTitle("🎉 **КОНКУРС** 🎉")
         .setDescription(`
         Нажми на 🎉 для участия!
         **Приз конкурса: **${prize}
         **Победитель конкурса: **${winnerCount}
         **Конкурс закончиться через: **${args[0]}
         **Создатель конкурса: **${message.author}`)
         .setTimestamp(`Заканчивается в ${Date.now()+ms(args[0])}`)
         .setColor("#d98a23")
         
        // sending the giveaway embed
        var msg = await message.channel.send(botEmbed)
        
        // the bot with that emoji once it sends the embed
        msg.react('🎉')
    
        // setting the timeout of the giveaway
        setTimeout(function () {
    
            var random = 0;
            var winners = [];
            var inList = false;
        
            // getting all people who reacted
            var peopleReacted = msg.reactions.cache.get("🎉").users.cache.array();
    
            // removing the bot from reaction
            for (let i = 0; i < peopleReacted.length; i++) {
    
                if(peopleReacted[i].id == client.user.id){
                    peopleReacted.splice(i,1);
                    continue;
                }
            }
    
            // if no people entered the giveaway send this
            if(peopleReacted.length == 0) {
                var non = new MessageEmbed()
                 .setColor("#ff0000")
                 .setTitle("🎉 **Конкурс окончен** 🎉")
                 .setDescription(`Никто не победил так как ни один человек не решился принять участие!
                 
                  **Giveaway Hosted By: **${message.author}`)
                msg.edit(non)
    
                return message.channel.send(`Никто не победил так как ни один человек не решился принять участие! :(\n${msg.url}`)
            }
    
            // if the winner count is higher then the members who joined the giveaway
            if(peopleReacted.length < winnerCount) {
                var non = new MessageEmbed()
                 .setColor("#ff0000")
                 .setTitle("🎉 **КОНКУРС ОКОНЧЕН** 🎉")
                 .setDescription(`Никто не победил так как ни один человек не решился принять участие!
                 
                  **Giveaway Hosted By: **${message.author}`)
                msg.edit(non)
    
                return message.channel.send(`Никто не победил так как ни один человек не решился принять участие! :(\n${msg.url}`)
            }
    
            // choosing someone randomly 
            for (let y = 0; y < winnerCount; y++) {
    
                inList = false;
    
                random = Math.floor(Math.random() * peopleReacted.length);
    
                // if this person already return
                for (let o = 0; o < winners.length; o++) {
    
                    if(winners[o] == peopleReacted[random]){
                        inList = true;
                        y--;
                        break;
                    }
                }
    
    
                // if not, list him in the winners
                if(!inList){
                    winners.push(peopleReacted[random]);
                }
            }
    
            // getting the winner respond
            var response = ``
    
            // getting all the winners
            for (let y = 0; y < winners.length; y++) {
    
                // setting the winners in the embed
                response += `${winners[y]}\n`
                   
                // creating the winner embed
                var embed = new MessageEmbed()
                 .setColor("#d98a23")
                 .setTitle("🎉 **КОНКУРС ОКОНЧЕН** 🎉")
                 .setDescription(`---------------------------------
                 **${prize}**
                 **Победители:**
                 ${response}
                 **Конкурс создал: ** ${message.author}`)
                msg.edit(embed) // it will edit the embed 
        
                message.channel.send(`**Поздравляем:**\n${response}Вы выиграли... **${prize}**.\n${msg.url}`) // send a msg with the winner people
            }
            
            // setting the giveaway time
        }, ms(args[0]));

    }
}