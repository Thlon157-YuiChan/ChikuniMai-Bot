const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`起動しました。ユーザー名 ${readyClient.user.tag} として参加中`);
});

client.login(token);