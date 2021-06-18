
const Discord = require("discord.js")
const client = new Discord.Client()
const PREFIX = "!";
require("dotenv").config();

client.on("ready", () => {
  console.log("This bot is online!");
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  let args = msg.content.substring(PREFIX.length).split(" ");
  switch(args[0]){
    // Ping command
    case "ping":
      msg.reply("pong!");
      break;

    case "yodababy":
      msg.reply("https://media.giphy.com/media/ZFi2wFRs3lBvYNglWk/giphy.gif");
      break;
  }
});


client.login(process.env.TOKEN);