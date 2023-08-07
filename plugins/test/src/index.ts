import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        logger.log("[Mikicrep test]: loaded");
    },
    onUnload: () => {
        logger.log("[Mikicrep test]: unloaded");
    },
    settings: Settings,
}
