module.exports = {
	name: 'flipcoin',
  cooldown: 3,
	description: 'Flip a coin!',
  aliases: ['flip', 'coin'],
  guildOnly: true,
	execute(message, args) {
    var flipResult = Math.floor(Math.random() * 2) + 1;
    if(flipResult === 1)
      message.reply(` The Coin Landed On Heads!`);
    else if(flipResult === 2)
      message.reply(` The Coin Landed On Tails!`);
	},
};
