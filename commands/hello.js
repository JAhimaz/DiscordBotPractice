module.exports = {
	name: 'hello',
  cooldown: 3,
	description: 'Say Hello to the wonderful Bot <3',
  guildOnly: true,
	execute(message, args) {
    const helloResponses = ["Hey Cutie :3", "Henlo", "*Tips Fedora* 你好", "Hey Hey Hey", "Uwu Whats Cool"];
    var response = helloResponses [Math.floor(Math.random()*helloResponses .length)];
    message.reply(response);
	},
};
