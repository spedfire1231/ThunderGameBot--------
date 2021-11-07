const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'закрыть-тикет',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {

        const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKETS")
    
        if(!categoryID) return;
    
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
    
        if(message.channel.parentID == categoryID){
    
            message.channel.delete();
    
    
        } else {
            return;
        }

    }
}