const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTQ5NzkxMTQ4MzI4MjIyNzMy.D1ZBqw.TrNhM-Ji70ijPWMz-iHdt0lGUkU'
const PREFIX = '!'

bot.on('message', function(message){
  if(message.content == PREFIX + 'test'){
    message.reply('Hello, how are you?');
  }
});

bot.on('ready', function(){
  console.log("Ready");
})

bot.login(TOKEN);
