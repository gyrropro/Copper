const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, MessageFlags } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('slowmode')
	.setDescription('sets the slowmode for a channel')
    .addIntegerOption(option =>
        option
            .setName('number')
            .setDescription('amount to slowmode in seconds')
            .setRequired(true)
    )
	.setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
	.setContexts(InteractionContextType.Guild),
	async execute(interaction) {
        const number = interaction.options.getInteger('number');
        
        const embed = new EmbedBuilder()
			.setColor(0xc56a39)
			.setTitle(`Sucsessfuly set Slowmode to ${number} seconds`)
			.setTimestamp()
			.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

        interaction.channel.setRateLimitPerUser(number)

		await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
	},
};