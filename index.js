const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();

bot.on('message', message => {
  if(message.content === `${prefix}server`){
    message.channel.send(`Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`);
  } else if(message.content === `${prefix}owner`){
    message.reply(`The Owner Of The Server is ${message.author.username}`);
  }

});

bot.once('ready', () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
})

bot.login(token);
