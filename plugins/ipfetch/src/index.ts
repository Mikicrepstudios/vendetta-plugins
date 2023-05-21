import Settings from "./Settings";
import { HttpClient } from '@angular/common/http';

export default {

	onLoad: function() {
		const { metro, commands, logger } = vendetta;
		const { sendBotMessage: sendEphemeralClydeMessage } = metro.findByProps("sendBotMessage");

		function send(args, ctx) {
			const options = new Map(args.map((option) => [option.name, option]));
			const ipaddr = options.get("ipaddress").value;
			const url1 = "http://ip-api.com/json/" + ipaddr;

			constructor(public http: HttpClient) {}

			this.http.get(url1, data).subscribe(
			data => {
			sendEphemeralClydeMessage(ctx.channel.id, data);
      				},
    			);
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
				displayDescritpion: "Write IP address you want to fetch",
			}),
			applicationId: -1,
			inputType: 1,
			type: 1,
		});
	
	},

	settings: Settings,
};
