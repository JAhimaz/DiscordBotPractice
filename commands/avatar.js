module.exports = {
	name: 'avatar',
	description: 'Used to give the URL to an avatar',
  guildOnly: true,
	execute(message, args) {
    if (!message.mentions.users.size && !args.length) {
     return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
    }else if(!message.mentions.users.size){
     return message.channel.send(`Please \`@\` a User or Leave Arguements Blank`);
    }
    const avatarList = message.mentions.users.map(user => {
     return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
    });
   message.channel.send(avatarList);
	},
};
