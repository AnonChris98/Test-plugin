# Test Slash (Revenge/Vendetta Plugin)

Fügt den Slash-Befehl `/test` hinzu. Beim Ausführen öffnet sich ein Popup
mit dem Text **„Plugin test erfolgreich“** und dem Button **„Ok“**.

## Struktur
```
test-slash-plugin/
├─ manifest.json
├─ src/
│  └─ index.ts
├─ index.js        (wird durch `npm run build` erzeugt)
├─ package.json
└─ tsconfig.json
```

## Entwicklung
1. Abhängigkeiten installieren:
   ```bash
   npm i
   ```
2. Bauen:
   ```bash
   npm run build
   ```
   Dadurch entsteht `index.js` im Projektroot. **manifest.json** referenziert diese Datei als `main`.

## Nutzung in Revenge/Vendetta
- Projekt auf GitHub Pages hosten **oder** die Dateien lokal mit einem Webserver bereitstellen.
- In der App: **Einstellungen → Plugins → Add** und die URL zum Plugin angeben (Ordner-URL; der Mod lädt dann `manifest.json` und `index.js`).
- Dann in einem beliebigen Chat `/test` ausführen.

## Hinweise
- Je nach Fork/Version heißen die Imports minimal anders. Falls `@vendetta/ui/alerts` oder `@vendetta/commands` fehlen, suche nach ähnlich benannten Modulen oder nutze vorübergehend einen Toast:
  ```ts
  // Fallback
  import { showToast } from "@vendetta/ui/toasts";
  showToast("Plugin test erfolgreich");
  ```
- Beim Deaktivieren des Plugins wird der Slash-Befehl sauber deregistriert.
