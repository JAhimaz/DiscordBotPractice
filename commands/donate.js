module.exports = {
	name: 'donate',
  cooldown: 1,
	description: 'Support and Donate the Bot! <3',
  guildOnly: true,
	execute(message, args) {
    const donateResponses = [
        `You wanna donate?! Awesome!\nDonate Here: https://paypal.me/JAhimaz?locale.x=en_US`,
        `OMG YES!\nDonate Here: https://paypal.me/JAhimaz?locale.x=en_US`,
        `谢谢你!\nDonate Here: https://paypal.me/JAhimaz?locale.x=en_US`,
        `ありがとうございます!\nDonate Here: https://paypal.me/JAhimaz?locale.x=en_US`,
        `고맙습니다!\nDonate Here: https://paypal.me/JAhimaz?locale.x=en_US`,
      ];
    var response = donateResponses [Math.floor(Math.random()*donateResponses .length)];
    message.reply(response);
	},
};
