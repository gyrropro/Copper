const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('server')
		.addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Gives server info')
        ),
	async execute(interaction) {
		let embed

		const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'info') {
            embed = new EmbedBuilder()
				.setColor(0xc56a39)
				.setTitle('Comming soon!')
				.setTimestamp()
				.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

			await interaction.reply({ embeds: [embed] });
        }
	},
};