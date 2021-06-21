const Discord  = require('discord.js');
module.exports = {
    name: 'clear',
    discription: 'clear channel content',
    async execute(message, args){
        // saftey feature to the clear messages
        if(!args[0]) return message.reply("You did not input a number");
        if(isNaN(args[0])) return message.reply("invalid number inputed");
        if(args[0] > 250) return message.reply("You are trying to delete too many messages at once");
        if(args[0] < 1) return message.reply("You don't need this command if the amount is less than one");

        // the args that is fetched is the limit of how many messages that are deleted
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            // deletes the amount of messages specified in the command with bulkDelete
            message.channel.bulkDelete(messages);
        });
    }
}