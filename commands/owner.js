module.exports = {
	name: 'owner',
  cooldown: 3,
	description: 'Used To Gather Details On The Owner.',
  guildOnly: true,
	execute(message, args) {
	   message.reply(`The Owner Of The Server is ${message.author.username}`);
	},
};
