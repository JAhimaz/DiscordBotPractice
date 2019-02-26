module.exports = {
	name: 'server',
  cooldown: 10,
	description: 'Used To Gather Details On The Server.',
  guildOnly: true,
	execute(message, args) {
		message.channel.send(`Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`);
	},
};
