const { prefix } = require('../config.json');

module.exports = {
	name: 'purge',
	description: 'Used To Deleted Mass Amount Of Messages From A Channel',
  args: true,
  guildOnly: true,
	async execute(message, args) {
    const deleteCount = parseInt(args[0], 10);

    if(!deleteCount || deleteCount < 2 || deleteCount > 200)
      return message.reply(`\nPlease provide a number between 2 and 100 for the number of messages to delete\nFor Example: \`${prefix}purge 3\``);

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
	},
};
