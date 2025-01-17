const { SlashCommandBuilder, Client } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beg')
		.setDescription('Beg for coins'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
	    .setColor(0xc56a39)
	    .setTitle('Coming soon! (economy update)')
        .setTimestamp()
        .setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

		await interaction.reply({ embeds: [embed] });
	},
};