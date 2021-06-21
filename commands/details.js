const Discord  = require('discord.js');
module.exports = {
	name: 'details',
	description: 'details',
	execute(message) {
		const embed = new Discord.MessageEmbed()
        .addField('**Here are the available commands:**', "Please note that this bot uses '!' as a command prefix")
        .addField("Details:")
        .addFields(
            { name: 'details', value: 'add details here' }
        )
        .setColor(0x38f560);
        message.reply(embed);
	},
};
