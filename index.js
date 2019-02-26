const fs = require('fs');

const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return; //Ignores itself

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  if (!bot.commands.has(commandName)) return;
  const command = bot.commands.get(commandName);
  //Error Checking
  if (command.guildOnly && message.channel.type !== 'text') {
	   return message.reply(`Sorry Babe, I know you like to slide into my DM\'s but I can\'t do that here.\nI Only Works In Servers, Please Feel Free To Add Me To One (I'm Lonely, Please...)`);
  }

  if (command.args && !args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

  try {
  	command.execute(message, args);
  } catch (error) {
  	console.error(error);
  	message.reply('there was an error trying to execute that command!');
  }
});

bot.once('ready', () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
})

bot.login(token);
