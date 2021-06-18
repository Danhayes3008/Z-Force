const Discord  = require('discord.js');
module.exports = {
	name: 'help-about',
	description: 'help',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
        .addField('**Here are the available commands:**', "Please note that this bot uses '!' as a command prefix")
        .addField("Details:", "`!ping`**: Simple direct message that gets one responce back**")
        .addFields(
            { name: 'about', value: 'Some value here' }
        )
        .setColor(0x38f560);
        message.reply(embed);
	},
};
