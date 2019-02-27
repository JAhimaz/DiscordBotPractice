module.exports = {
	name: 'randomnumber',
  cooldown: 1,
	description: 'A Random Number from 1 - 1000',
  aliases: ['randomnum', 'rannum', 'num'],
  guildOnly: true,
	execute(message, args) {
    var ranNum = Math.floor(Math.random() * 1000) + 1;

    const ranNumResponses = [`You Got The Random Number : ${ranNum}`,
                             `Lucky Number : ${ranNum}`,
                             `You Should Do The Lottery With : ${ranNum}`,
                             `Hey Hey Hey You Got : ${ranNum}`,
                             `Uwu : ${ranNum}`
                            ];
    var response = ranNumResponses [Math.floor(Math.random()*ranNumResponses .length)];
    message.reply(response);
	},
};
