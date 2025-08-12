// Registriert einen Slash-Befehl /test und zeigt einen Bestätigungs-Dialog.
// Kompatibel mit Vendetta/Revenge-Umfeld.
import { showConfirmationAlert } from "@vendetta/ui/alerts";
import { registerSlashCommand } from "@vendetta/commands";

let unregister: (() => void) | undefined;

export const onLoad = () => {
  unregister = registerSlashCommand({
    name: "test",
    displayName: "test",
    description: "Öffnet ein Test-Popup mit OK-Button.",
    options: [],
    execute: () => {
      // Dialog mit Titel/Text und OK-Button (schließt automatisch)
      showConfirmationAlert({
        title: "Plugin test erfolgreich",
        confirmText: "Ok",
      });
    }
  });
};

export const onUnload = () => {
  unregister?.();
};
