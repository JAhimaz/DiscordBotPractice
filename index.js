const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();

bot.on('message', function(message){
  if(message.content == PREFIX + 'hey'){
    message.reply('Hello, how are you?');
  }
});

bot.once('ready', function(){
  console.log("Ready For Takeoff!");
})

bot.login(TOKEN);
