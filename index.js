const fs = require('fs');

//Global Variables
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const bot = new Discord.Client();
const cooldowns = new Discord.Collection();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.on('message', async message => {
  if (message.isMentioned(bot.user)) {
    message.reply(`\nMy Current Prefix is \"${prefix}\"\nIf you would like to know commands type: ${prefix}help or ${prefix}commands.\nCiaoCiaoLmao!`);
  }

  if(!message.content.startsWith(prefix) || message.author.bot) return; //Ignores itself

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  const command = bot.commands.get(commandName)
  || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;
  //Error Checking
  if (command.guildOnly && message.channel.type !== 'text') {
	   return message.reply(`Sorry Babe, I know you like to slide into my DM\'s but I can\'t do that here.\nI Only Works In Servers, Please Feel Free To Add Me To One (I'm Lonely, Please...)`);
  }

  if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
    if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
	  return message.channel.send(reply);
	}

  //COOLDOWN FUNCTION
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(`please wait ${timeLeft.toFixed(0)} more second(s) before reusing the \`${command.name}\` command.`);
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  //END OF COOLDOWN FUNCTION

  try {
  	command.execute(message, args); //Call the command
  } catch (error) {
  	console.error(error);
  	message.reply('there was an error trying to execute that command!');
  }
});

bot.once('ready', () => {
  console.log(`Loading Commands\n------------------`);
  for (const file of commandFiles) {
    let fileName = file.slice(0, file.length-3);
    console.log(`Loaded ${prefix}${fileName}`);
  } console.log(`------------------`);
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
  console.log(`~~ Thanks For Using ServeBot! @Joshhh`);
  bot.user.setActivity(`around with JS | ${prefix}help`);
})

bot.login(token);
