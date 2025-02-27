const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('operationAnnounce')
		.setDescription('運行予定の告知を投稿します'),
	async execute(interaction) {
		await interaction.reply('# 運行');
        interaction.channnel.send("# あほ");
	},
};