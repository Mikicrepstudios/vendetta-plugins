import Settings from "./Settings";

export default  {
	onLoad: () => {
		const { metro, commands, logger } = vendetta;
		const { sendBotMessage: sendEphemeralClydeMessage } = metro.findByProps("sendBotMessage");

		function send(args, ctx) {
			const options = new Map(args.map((option) => [option.name, option]));
			const ipaddr = options.get("ipaddress").value;
			const url1 = "http://ip-api.com/json/" + ipaddr;
			fetch(url1)
			.then((res) => res.json())
			.then((json) => {
				sendEphemeralClydeMessage(ctx.channel.id, JSON.stringify(json, 0, 4));
			})
			.catch(error => {
    				console.error('[Mikicrep ipfetch]: error occured: ', error);
			}
		}
	

		this.onUnload = commands.registerCommand({
			execute: send,
			name: "ip",
			displayName: "ip",
			description: "Fetch IP address",
			options: Array.from({length:1}).fill({
				required: true,
				type: 3,
				name: "ipaddress",
				displayName: "ipaddress",
				description: "Write IP address you want to fetch",
				displayDescription: "Write IP address you want to fetch",
			}),
			applicationId: -1,
			inputType: 1,
			type: 1,
		});	
	},

	settings: Settings,
};
