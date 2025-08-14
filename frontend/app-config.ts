import type { AppConfig } from "./lib/types";

export const APP_CONFIG_DEFAULTS: AppConfig = {
  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: false,
  isPreConnectBufferEnabled: true,

  startButtonText: "Start call",
};
