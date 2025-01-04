const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, MessageFlags } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('unban')
	.setDescription('Select a member and unban them.')
	.addUserOption(option =>
		option
			.setName('target')
			.setDescription('The member to unban')
			.setRequired(true))
	.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
	.setContexts(InteractionContextType.Guild),
	async execute(interaction) {
        const target = interaction.options.getUser('target');

        const embed = new EmbedBuilder()
			.setColor(0xc56a39)
			.setTitle(`Sucsessfuly unbanned: ${target.globalName}`)
			.setTimestamp()
			.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

		await interaction.guild.members.unban(target);

		await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
	},
};