const fs = require('fs');
const Discord = require("discord.js")
const client = new Discord.Client()
const PREFIX = "!";
require("dotenv").config();
// Reading command files
client.commands = new Discord.Collection();

// looks for our commands in the commands folder and looks for .js files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on("ready", () => {
	// tells us the bot is active
	console.log("This bot is online!");
	// tells us what bot we are logged in with
	console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', message =>{
  // checks if the content is from the bot or user using the prefix
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  // Allows you to have multiple commands
  const args = message.content.slice(PREFIX.length).trim().split(/ +/);
  // makes it all lowercase
	const command = args.shift().toLowerCase();
  if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(process.env.TOKEN);