const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		let status = [
			{
			  name: '/ping',
			},
			{
			  name: '/info',
			},
			{
			  name: '/lock',
			},
			{
			  name: '/unlock',
			},
		  ];

		console.log(`Ready! Logged in as ${client.user.tag}`);

		setInterval(() => {
			let random = Math.floor(Math.random() * status.length);
			client.user.setActivity(status[random]);
		  }, 10000);
	},
};