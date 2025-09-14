# Portfolio Starter (GitHub Pages)

Dieses Repo ist ein **sofort deploybares** Grundgerüst für ein Designer-Portfolio mit GitHub Pages.

## Schnellstart

1. **Neues Repo erstellen** auf GitHub. Entweder
   - **User-Site**: `<DEIN_USERNAME>.github.io` (empfohlen für Portfolio), oder
   - **Projekt-Site**: z. B. `portfolio`.
2. **Dateien aus diesem Ordner hochladen** (oder per Git pushen).
3. In GitHub auf **Settings → Pages → Build and deployment → Source: GitHub Actions** stellen.
4. Push auf `main` ⇒ Auto-Deploy (siehe Workflow unter `.github/workflows/pages.yml`).
5. Deine Seite ist dann unter
   - `https://<DEIN_USERNAME>.github.io` (User-Site) **oder**
   - `https://<DEIN_USERNAME>.github.io/<REPO_NAME>` (Projekt-Site)
   erreichbar.

> Alternative ohne Actions: In **Settings → Pages → Source** `Deploy from a branch` wählen und `main` + `/ (root)` einstellen. Dann wird direkt aus dem Repo veröffentlicht.

## Custom Domain (optional)

1. In **Settings → Pages → Custom Domain** z. B. `www.deinname.com` eintragen.
2. DNS beim Registrar setzen:
   - `CNAME: www → <DEIN_USERNAME>.github.io`
   - A-Records für `@` (nackte Domain) auf `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. **Enforce HTTPS** aktivieren.

## Inhalte anpassen

- Ersetze Platzhalter in `index.html` (`<DEIN NAME>`, `<DEIN_USERNAME>`).
- Bilder: Ersetze die Platzhalter (`picsum.photos`) durch echte Projektvisuals.
- SEO/Meta: `description`, Open Graph, `sitemap.xml`, `robots.txt`.
- Favicons/OG-Image liegen in `assets/`.

## Entwickeln

- Alles ist statisch (HTML/CSS/JS). Für Frameworks (Vite/React) kannst du später den Build-Schritt im Workflow hinzufügen (siehe Kommentar im YAML).

Viel Erfolg!
