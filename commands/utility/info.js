const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot')
		.setDescription('bot')
		.addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Gives bot info')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('commands')
                .setDescription('Gives comands and what they do')
        ),
	async execute(interaction) {
		let embed

		const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'info') {
            embed = new EmbedBuilder()
				.setColor(0xc56a39)
				.setTitle('Bot Info:')
				.addFields({ value: '`1.0.0`', name: 'Copper version:' })
				.addFields({ value: '`9`', name: 'number of commands:' })
				.addFields({ value: `<t:${Math.floor(interaction.client.readyTimestamp / 1000)}:R>`, name: 'online since:' })
				.setTimestamp()
				.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

			await interaction.reply({ embeds: [embed] });
        } else if (subcommand === 'commands') {
            embed = new EmbedBuilder()
				.setColor(0xc56a39)
				.setTitle('Comming Soon!')
				.setTimestamp()
				.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });
		
			await interaction.reply({ embeds: [embed] });
		}
	},
};