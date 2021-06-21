const Discord  = require('discord.js');
module.exports = {
    // The name is the command that is called. This one is the first one called as its the main help menu screen.
	name: 'help',
	description: 'help',
	execute(message, args){
        // If there are no arguments with the !help then this is what the bot will display to the screen
        if(!args.length) {
            const embed = new Discord.MessageEmbed()
            .addField('Help Menu', "Please find below commands to search the help menu sections")
            .addField("`!help forms`")
            .addField("`!help member`")
            .addField("`!help schedules`")
            // Sets a colour to the side of the embed box on the screen
            .setColor(0x38f560);
            message.reply(embed);
        // If there is one argument with the word listed in the if statement then the bot will display the content for that argument
        } else if( args[0]=== 'forms'){
            const embed = new Discord.MessageEmbed()
            .addField('Forms Commands', "this section is the list of commands to submit requests and complaints")
            .addField("Request Forms:", "Commands:")
            // The commands for making a rquest
            .addFields(
                { name: 'Request Role Change', value: 'Some value here', inline: true },
                { name: 'Request Event', value: 'Some value here', inline: true },
                { name: 'Request Challange', value: 'Some value here', inline: true },
                { name: 'Request Nickname Change', value: 'Some value here', inline: true },
            )
            .addField("Complaint Forms:", "Commands:")
            .addFields(
                { name: 'Report Member', value: 'Some value here', inline: true },
                { name: 'Report Propaganda', value: 'Some value here', inline: true },
                { name: 'Report Content', value: 'Some value here', inline: true },
            )
            .setColor(0x38f560);
            message.reply(embed);
        }else if( args[0]=== 'member'){
            const embed = new Discord.MessageEmbed()
            .addField('Member Commands')
            .addField("Member", "test embed")
            .setColor(0x38f560);
            message.reply(embed);
        }else if( args[0]=== 'schedules'){
            const embed = new Discord.MessageEmbed()
            .addField('schedules Commands', "this section is the list of commands to deal with events and alerts for the server")
            .addField("Event Checker:", "Commands:")
            .setColor(0x38f560);
            message.reply(embed);
        }	
	},
};
