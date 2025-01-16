const { SlashCommandBuilder, Client } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ballance')
		.setDescription('Shows user ballance'),
	async execute(interaction) {
        const embed = new EmbedBuilder()
	    .setColor(0xc56a39)
	    .setTitle('Comming soon!S')
		.addFields({ value: `<t:${Math.floor(interaction.client.readyTimestamp / 1000)}:R>`, name: 'online since:' })
        .setTimestamp()
        .setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

		await interaction.reply({ embeds: [embed] });
	},
};