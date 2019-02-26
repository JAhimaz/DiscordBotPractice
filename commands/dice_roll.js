module.exports = {
	name: 'diceroll',
  cooldown: 3,
	description: 'Roll A Six Sided Die',
  aliases: ['dice', 'roll'],
  guildOnly: true,
	execute(message, args) {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
	  message.reply(` You Rolled a ${diceRoll}`);
	},
};
