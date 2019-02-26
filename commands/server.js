module.exports = {
	name: 'server',
	description: 'Used To Gather Details On The Server.',
  args: true,
  guildOnly: true,
	execute(message, args) {
		message.channel.send(`Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}`);
	},
};
