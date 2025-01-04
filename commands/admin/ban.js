const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, MessageFlags } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('ban')
	.setDescription('Select a member and ban them.')
	.addUserOption(option =>
		option
			.setName('target')
			.setDescription('The member to ban')
			.setRequired(true))
    .addStringOption(option =>
        option
            .setName('reason')
            .setDescription('The reason to ban')
    )
	.setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
	.setContexts(InteractionContextType.Guild),
	async execute(interaction) {
        const target = interaction.options.getUser('target');
		const reason = interaction.options.getString('reason') ?? 'No reason provided';
        let embed;

        if(interaction.user.id == target) {
            embed = new EmbedBuilder()
				.setColor(0xc56a39)
				.setTitle('You cannot Ban yourself!')
				.setTimestamp()
				.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });
        } else if(!(await interaction.guild.members.fetch(target.id)).bannable) {
            embed = new EmbedBuilder()
				.setColor(0xc56a39)
				.setTitle('You cannot Ban an admin!')
				.setTimestamp()
				.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });
        } else {
            embed = new EmbedBuilder()
				.setColor(0xc56a39)
				.setTitle(`Sucsessfuly banned: ${target.globalName}\nfor reason: ${reason}`)
				.setTimestamp()
				.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

            console.log(reason)

            await interaction.guild.members.ban(target);
        }

		await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
	},
};