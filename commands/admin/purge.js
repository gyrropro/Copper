const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, MessageFlags } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('purge')
	.setDescription('Purge messages in a channel')
    .addIntegerOption(option =>
        option
            .setName('number')
            .setDescription('The number of messages to purge')
            .setRequired(true)
    )
	.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
	.setContexts(InteractionContextType.Guild),
	async execute(interaction) {
        const number = interaction.options.getInteger('number');
        let embed;

        
        embed = new EmbedBuilder()
			.setColor(0xc56a39)
			.setTitle(`Sucsessfuly Purged ${number} messages`)
			.setTimestamp()
			.setFooter({ text: 'Copper', iconURL: 'https://i.imgur.com/ySErtc7.png' });

        interaction.channel.bulkDelete(number, true);

		await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
	},
};