const fetch = require('node-fetch');
const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class RPSCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'rps',
      aliases: ['rock'],
      group: 'other',
      memberName: 'other',
      description: 'Rock paper scissors',
      throttling: {
        usages: 2,
        duration: 10
      }
    });
  }

  async run(message) {
    try {
      const replies = ["Rock", "Paper", "Scissors"];
	  const reply = replies[Math.floor(Math.random() * replies.length)];

      const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Rock, Paper, Scissors')
        .setDescription(`**${reply}**`);
      return message.say(embed);
    } catch (e) {
      message.say('Could not play :confused: ');
      return console.error(e);
    }
  }
};