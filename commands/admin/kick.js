const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, MessageFlags } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('kick')
	.setDescription('Select a member and kick them.')
	.addUserOption(option =>
		option
			.setName('target')
			.setDescription('The member to kick')
			.setRequired(true))
    .addStringOption(option =>
        option
            .setName('reason')
            .setDescription('The reason to kick')
    )
	.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
	.setContexts(InteractionContextType.Guild),
	async execute(interaction) {
        const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
        let embed;

        if(interaction.user.id == target) {
            embed = new EmbedBuilder()
				.setColor(0xc56a39)
				.setTitle('You cannot Kick yourself!')
				.setTimestamp()
				.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });
        } else if(!(await interaction.guild.members.fetch(target.id)).kickable) {
            embed = new EmbedBuilder()
				.setColor(0xc56a39)
				.setTitle('You cannot Kick an admin!')
				.setTimestamp()
				.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });
        } else {
            embed = new EmbedBuilder()
				.setColor(0xc56a39)
				.setTitle(`Successfully kicked: ${target.globalName}\nfor reason: ${reason}`)
				.setTimestamp()
				.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

            await interaction.guild.members.kick(target);
        }

		await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
	},
};