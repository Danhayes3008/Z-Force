const Discord  = require('discord.js');
const version = "1.0.0";
module.exports = {
	name: 'details',
	description: 'details',
	execute(message) {
		const embed = new Discord.MessageEmbed()
        .setTitle("Details:")
        .addField('**Here are the available commands:**', "Please note that this bot uses '!' as a command prefix")
        
        .addFields(
            { name: 'details', value: 'add details here' },
            { name: 'Version', value: `${version}` }
        )
        .setColor(0x38f560);
        message.reply(embed);
	},
};
