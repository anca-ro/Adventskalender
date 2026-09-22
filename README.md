# Digitaler Adventskalender – NFC

## Enthalten

- `index.html` – Webseite
- `style.css` – responsives Design
- `content.js` – komplett ausgearbeitete 24 Türchen
- `app.js` – Datumslogik
- `README.md` – Anleitung

## Funktionsweise

Der NFC-Tag enthält nur eine feste URL. Die Webseite verwendet `Europe/Berlin` und öffnet automatisch das passende Türchen.

- Vor dem 1. Dezember: alle Türchen verschlossen
- 1.–24. Dezember: jeweils die bisherigen Türchen geöffnet
- Nach dem 24. Dezember: alle Türchen geöffnet
- Smartphone-optimiert
- Keine App notwendig

## Veröffentlichung mit GitHub Pages

1. GitHub-Konto öffnen/anlegen.
2. Neues Repository z. B. `adventskalender` erstellen.
3. Alle vier Website-Dateien (`index.html`, `style.css`, `content.js`, `app.js`) hochladen.
4. Repository → Settings → Pages.
5. Source: `Deploy from a branch`.
6. Branch `main`, Ordner `/ (root)`.
7. Speichern.
8. Die angezeigte Pages-URL ist die URL für den NFC-Tag.

## NFC beschreiben

Auf Android eine NFC-Schreib-App verwenden, URL auswählen und die GitHub-Pages-Adresse auf den Tag schreiben.

Danach den Tag mit mehreren Smartphones testen.

## Inhalte ändern

Nur `content.js` muss für redaktionelle Änderungen angepasst werden.

## Test vor Dezember

Für einen Test kann in `app.js` die Funktion `getAdventState()` vorübergehend so angepasst werden, dass ein fester Tag zurückgegeben wird.

Beispiel für Türchen 10:

    return { state: "during", day: 10, year: 2026 };

Vor dem echten Einsatz diese Testzeile wieder entfernen.

## Datenschutz

Die Website sammelt standardmäßig keine Namen, E-Mail-Adressen oder anderen personenbezogenen Daten.

## Wichtig

Die Inhalte aller 24 Türchen sind bei dieser rein statischen Variante im JavaScript enthalten. Ein technisch versierter Nutzer kann sie vorab aus dem Quelltext auslesen. Für einen normalen Büro-Adventskalender ist das in der Regel ausreichend.

Für echte Gewinnspiele oder geheime Inhalte wäre eine serverseitige Lösung sinnvoll.


## Musik und YouTube-Videos in einem Türchen

Jedes Türchen kann optional ein `media`-Feld besitzen. Der Player wird automatisch unter dem normalen Inhalt des Türchens angezeigt. Es gibt kein Autoplay.

### Eigene MP3-Datei

1. Lege im Repository einen Ordner `audio` an.
2. Lade dort z. B. `weihnachtslied.mp3` hoch.
3. Ergänze das gewünschte Türchen in `content.js`:

```js
11: {
  title: "Weihnachtsmusik",
  emoji: "🎵",
  html: `<p>Heute gibt es etwas auf die Ohren.</p>`,
  media: {
    type: "audio",
    src: "audio/weihnachtslied.mp3",
    caption: "Kopfhörer auf oder gemeinsam anhören."
  }
}
```

Für MP3 ist kein `mime` nötig. Andere Formate können z. B. mit `mime: "audio/ogg"` angegeben werden.

### YouTube-Video

Ergänze beim gewünschten Türchen:

```js
8: {
  title: "Video-Türchen",
  emoji: "🎬",
  html: `<p>Heute gibt es ein kleines Video.</p>`,
  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=VIDEO_ID",
    title: "Weihnachtsvideo",
    caption: "Viel Spaß beim Anschauen!"
  }
}
```

Akzeptiert werden normale YouTube-Links, `youtu.be`-Links, Shorts-/Live-Links und eine reine 11-stellige YouTube-Video-ID. Die Einbettung verwendet `youtube-nocookie.com`.

### Wichtig

- Ein einzelnes Türchen sollte entweder `audio` oder `youtube` verwenden.
- Medien starten nicht automatisch.
- Bei eigenen Audiodateien auf Urheber-/Nutzungsrechte achten.
- YouTube-Videos müssen das Einbetten auf externen Websites erlauben.
- Große Video-Dateien sollten nicht direkt im GitHub-Repository gespeichert werden; dafür ist YouTube deutlich geeigneter.
