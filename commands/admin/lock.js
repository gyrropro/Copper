const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, MessageFlags } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('lock')
	.setDescription('locks channel')
	.setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
	.setContexts(InteractionContextType.Guild),
	async execute(interaction) {
        const embed = new EmbedBuilder()
			.setColor(0xc56a39)
			.setTitle(`Sucsessfuly locked`)
			.setTimestamp()
			.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

        interaction.channel.permissionOverwrites.create(interaction.channel.guild.roles.everyone, { SendMessages: false });

		await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
	},
};