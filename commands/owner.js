module.exports = {
	name: 'owner',
	description: 'Used To Gather Details On The Owner.',
  args: true,
  guildOnly: true,
	execute(message, args) {
	   message.reply(`The Owner Of The Server is ${message.author.username}`);
	},
};
