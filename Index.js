import { showConfirmationAlert } from "@vendetta/ui/alerts";
import { registerSlashCommand } from "@vendetta/commands";

let unregister;

export const onLoad = () => {
  unregister = registerSlashCommand({
    name: "test",
    displayName: "test",
    description: "Öffnet ein Test-Popup mit OK-Button.",
    options: [],
    execute: () => {
      showConfirmationAlert({
        title: "Plugin test erfolgreich",
        confirmText: "Ok",
      });
    },
  });
};

export const onUnload = () => {
  unregister?.();
};
