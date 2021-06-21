const Discord  = require('discord.js');
module.exports = {
    name: 'clear',
    discription: 'clear channel content',
    async execute(message, args){
        // the args that is fetched is the limit of how many messages that are deleted
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            // deletes the amount of messages specified in the command with bulkDelete
            message.channel.bulkDelete(messages);
        });
    }
}