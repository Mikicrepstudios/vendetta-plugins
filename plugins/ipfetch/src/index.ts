import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
	onLoad: function() {
	    this.onUnload = commands.registerCommand({
		settings: Settings,
		execute: (args, ctx) => {
			try {
				sendEphemeralClydeMessage(ctx.channel.id, "Test");
			} catch (err) {
				logger.error(err);
				sendEphemeralClydeMessage(ctx.channel.id, "Command failed to run: " + err.message);
			}
		},
		name: "ip",
		displayName: "ip",
		description: "Fetch IP address",
		options: Array.from({length:20}).fill({
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
	}),
}
