/*
 * 24 fertige Türchen.
 * Du kannst später ausschließlich diese Datei ändern.
 *
 * Optional kann jedes Türchen zusätzlich ein `media`-Feld bekommen.
 *
 * AUDIO (Datei im Repository, z. B. /audio/lied.mp3):
 * media: { type: "audio", src: "audio/lied.mp3", caption: "Heute gibt es Musik." }
 *
 * YOUTUBE (normale URL, youtu.be-Link oder 11-stellige Video-ID):
 * media: { type: "youtube", url: "https://www.youtube.com/watch?v=VIDEO_ID", title: "Mein Video" }
 *
 * Hinweis: Hinter `html: `...`` muss vor `media:` ein Komma stehen.
 */
const ADVENT_CONTENT = {
  1: {
    title: "Willkommen im Advent!",
    emoji: "🎄",
    html: `
      <p><strong>Schön, dass du dabei bist!</strong></p>
      <div class="big-message">
        <strong>Der Adventskalender ist eröffnet.</strong>
        <span>🎁</span>
      </div>
      <p>Ab heute wartet hinter jedem Türchen eine kleine Überraschung. Also: kurz durchatmen, Türchen öffnen und ein bisschen Advent genießen. 🎄</p>
    `
  },
  2: {
    title: "Winterwissen: Schneeflocken",
    emoji: "❄️",
    html: `
      <div class="fact">
        <span>💡</span>
        <div>Die Eiskristalle einer Schneeflocke wachsen meist mit <strong>sechs Armen</strong>. Das liegt an der sechseckigen Ordnung, in der sich Wassermoleküle beim Gefrieren anordnen.</div>
      </div>
      <p>Auf ihrem Weg durch die Wolke verändern Temperatur und Feuchtigkeit das Wachstum – so entstehen immer neue Formen.</p>
      <p class="small"><a href="https://www.noaa.gov/stories/how-do-snowflakes-form-science-behind-snow" target="_blank" rel="noopener">Mehr zur Entstehung von Schneeflocken</a></p>
    `
  },
  3: {
    title: "Winterräumer",
    emoji: "🚜",
    html: `
      <p>Mach die Wege frei für den Weihnachtsmann! Räume die Schneeflocken ab, weiche den Wichteln aus und sammle Pylone für einen kurzen Räum-Power-Schub.</p>
      <div class="winter-raeumer-embed">
        <iframe src="winterraeumer.html" title="Winterräumer – Winter-Arcade-Spiel" loading="lazy" allow="autoplay"></iframe>
      </div>
      <p><a href="winterraeumer.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
      <p class="small">Pfeiltasten oder WASD · Mobil: wischen oder die Richtungstasten benutzen</p>
    `
  },
  4: {
    title: "Schoko-Crossies mit Weihnachtskick",
    emoji: "🍫",
    html: `
      <p><strong>10–15 Minuten Arbeit · ca. 25–30 Stück</strong></p>
      <div class="card">
        <h3>Montag ohne Kuchen?</h3>
        <p>Der Montagskuchen hat bis zum <strong>11.01.2027</strong> Pause. Bitte organisiert euch im Dezember selbst. Zur Inspiration gibt’s hier ein einfaches Rezept.</p>
        <p>Wer hat Lust, am Wochenende zu backen und übernimmt die Vertretung?</p>
      </div>
      <h3>Zutaten</h3>
      <ul>
        <li>200 g Schokolade oder Kuvertüre</li>
        <li>60 g Cornflakes</li>
        <li>50 g gehackte Mandeln</li>
        <li>½ TL Zimt oder Spekulatiusgewürz</li>
      </ul>
      <h3>Zubereitung</h3>
      <p>Schokolade im Wasserbad schmelzen. Mandeln, Cornflakes und Gewürz unterrühren. Mit zwei Teelöffeln kleine Häufchen auf Backpapier setzen und fest werden lassen. Fertig!</p>
    `
  },
  5: {
    title: "Tannenbaum aus Papier",
    emoji: "🎄",
    html: `
      <p>Heute wird aus einem Blatt Papier ein kleiner Weihnachtsbaum. Du brauchst nur ein quadratisches Blatt Papier und eine Schere.</p>
      <p>Falte das Blatt wie auf den Bildern 1 bis 13. Schneide unten die überstehende Spitze ab und schneide die schrägen Seiten mehrmals ein. Knicke die Laschen an den Einschnitten nach unten und fächere die Papierlagen auf. Fertig ist dein Tannenbaum!</p>
      <img src="https://i.pinimg.com/1200x/59/58/a2/5958a21738a74ab7ae00514a599e384c.jpg" alt="18 Bildschritte vom quadratischen Papier zum aufgefächerten Tannenbaum" width="564" height="902" loading="lazy" style="display:block;max-width:100%;height:auto;margin:0 auto;border-radius:16px;" />
    `
  },
  6: {
    title: "Yoga für Weihnachtsmänner",
    emoji: "🖼️",
    html: `
      <img src="https://i.pinimg.com/1200x/67/2f/ee/672feef8844da771f64cdf898126ac05.jpg" alt="Bild zu Türchen 6" loading="lazy" style="display:block;max-width:100%;max-height:70vh;height:auto;margin:0 auto;border-radius:16px;object-fit:contain;" />
    `
  },  7: {
    title: "Lebkuchenmann auf dem Heimweg",
    emoji: "🍪",
    html: `
      <p>Ohje... da hat wohl jemand die Fußgängerbrücke vergessen und eine Verkehrssicherung gibt es auch nicht.</p>
      <div class="frogger-embed">
        <iframe src="frogger.html" title="Lebkuchenmann auf dem Heimweg" loading="lazy" allow="autoplay"></iframe>
      </div>
      <p><a href="frogger.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
    `
  },
  8: {
    title: "Wichtel-Check: Geschenkpapier",
    emoji: "🎁",
    html: `
      <div class="card">
        <h3>Ist noch Geschenkpapier da?</h3>
        <p>Falls nicht: jetzt auf die Einkaufsliste setzen – zusammen mit Klebeband und Geschenkanhängern.</p>
        <p class="small">Dein Zukunfts-Ich am 24. Dezember wird es dir danken. 😉</p>
      </div>
    `
  },
  9: {
    title: "Winterwissen: Atemwolken",
    emoji: "🌬️",
    html: `
      <div class="fact">
        <span>💡</span>
        <div>Die weiße Wolke vor dem Mund ist kein Rauch. Die feuchte, warme Atemluft kühlt draußen ab; dabei kondensiert Wasserdampf zu winzigen Wassertröpfchen.</div>
      </div>
      <p>Ähnlich entstehen kleine Wolken am Himmel – dort kühlt feuchte Luft ebenfalls ab.</p>
      <p class="small"><a href="https://www.loc.gov/everyday-mysteries/categories/meteorology-climatology/item/why-do-i-see-my-breath-when-its-cold-outside/" target="_blank" rel="noopener">Die Erklärung der Library of Congress</a></p>
    `
  },
  10: {
    title: "Verdächtiges Geschenk",
    emoji: "🎁",
    html: `
      <p>Ein Geschenk tickt! Löse die Rätsel, bevor die Zeit abläuft. Spiele allein oder zu zweit: Eine Person sieht die Module, die andere hilft mit dem Handbuch.</p>
      <div class="gift-embed">
        <iframe src="keep-talking-weihnachten.html" title="Verdächtiges Geschenk" loading="lazy"></iframe>
      </div>
      <p><a href="keep-talking-weihnachten.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
    `
  },
  11: {
    title: "Saftiger Gewürzkuchen",
    emoji: "🍰",
    html: `
      <p><strong>15 Minuten Vorbereitung · ca. 35 Minuten Backzeit</strong></p>
      <div class="card">
        <h3>Die zweite Montags-Kuchen-Krise ist fast da! 😅</h3>
        <p>Ich habe gehört, Kuchen sei im Dezember ein unverzichtbarer Bestandteil der betrieblichen Gesundheitsförderung. Deshalb gibt es heute wenigstens das Rezept. Für die Umsetzung seid ihr selbst verantwortlich.</p>
      </div>
      <h3>Zutaten</h3>
      <ul>
        <li>250 g Mehl</li>
        <li>150 g Zucker</li>
        <li>2 Eier</li>
        <li>125 g weiche Butter</li>
        <li>150 ml Milch</li>
        <li>1 Päckchen Backpulver</li>
        <li>2 TL Lebkuchen- oder Spekulatiusgewürz</li>
        <li>2 EL Backkakao</li>
      </ul>
      <h3>Zubereitung</h3>
      <p>Backofen auf 180 °C Ober-/Unterhitze vorheizen. Butter, Zucker und Eier verrühren. Mehl, Backpulver, Gewürz und Kakao mischen und zusammen mit der Milch unterrühren. In eine gefettete kleine rechteckige Form geben und etwa 30–35 Minuten backen. Stäbchenprobe machen. Nach dem Abkühlen nach Wunsch mit Puderzucker bestäuben.</p>
    `
  },
  12: {
    title: "Weihnachtsstern aus Teebeutel-Verpackungen",
    emoji: "⭐",
    html: `
      <p>Heute wird aus leeren Teebeutel-Verpackungen ein Weihnachtsstern zum Aufhängen.</p>
      <div class="card">
        <h3>Videoanleitung</h3>
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=304907837300795394&amp;src=oembed"
          title="Videoanleitung zum Weihnachtsstern auf Pinterest"
          width="450"
          height="900"
          loading="lazy"
          allow="autoplay; fullscreen"
          allowfullscreen
          style="display:block;max-width:100%;margin:0 auto;border:0;">
        </iframe>
        <p><a href="https://de.pinterest.com/pin/304907837300795394/" target="_blank" rel="noopener">Video auf Pinterest öffnen</a></p>
      </div>
    `
  },
  13: {
    title: "Yoga für Schneemänner",
    emoji: "🖼️",
    html: `
      <img src="https://i.pinimg.com/736x/81/0c/33/810c3363c51088ef8fdc2b80fe90ff25.jpg" alt="Bild zu Türchen 13" loading="lazy" style="display:block;max-width:100%;max-height:70vh;height:auto;margin:0 auto;border-radius:16px;object-fit:contain;" />
    `
  },
  14: {
    title: "Schneeballschlacht",
    emoji: "❄️",
    html: `
      <p>Zwei Teams, sechs Wichtel und ein sehr frostiges Duell. Wechselt euch ab und bringt das gegnerische Team mit Schneebällen, Geschenkbomben und Zuckerstangen-Schüssen ins Wanken!</p>
      <div class="artillery-embed">
        <iframe src="schneeballschlacht.html" title="Schneeballschlacht" loading="lazy" allow="autoplay"></iframe>
      </div>
      <p class="small">Steuerung: ← → laufen · ↑ ↓ zielen · Leertaste halten und loslassen · 1–3 Waffen wechseln</p>
      <p><a href="schneeballschlacht.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
    `
  },
  15: {
    title: "Wichtel-Check: Pakete",
    emoji: "📦",
    html: `
      <div class="card">
        <h3>Müssen noch Geschenke verschickt werden?</h3>
        <p>Jetzt einpacken, Adresse prüfen und zur Post bringen. Die Weihnachtswichtel sind fleißig – aber leider kein Expressdienst. 😉</p>
      </div>
    `
  },
  16: {
    title: "Winterwissen: Schnee und Sonnenlicht",
    emoji: "❄️",
    html: `
      <div class="fact">
        <span>☀️</span>
        <div>Frischer Schnee reflektiert typischerweise etwa 90 % des einfallenden Sonnenlichts. Bei älterem Schnee sind es oft nur rund 40 % – frischer Schnee ist also ein richtiger Winterspiegel.</div>
      </div>
      <p>Diese Rückstrahlung heißt Albedo. Sie sorgt dafür, dass frisch verschneite Landschaften besonders hell wirken.</p>
      <p class="small"><a href="https://www.weather.gov/media/owp/oh/hrl/docs/22snow17.pdf" target="_blank" rel="noopener">Mehr zum Energieaustausch an der Schneeoberfläche</a></p>
    `
  },
  17: {
    title: "Raumschiff Mistelzweig",
    emoji: "🎯",
    html: `
      <p>Zerlege die Christbaumkugeln und sammle möglichst viele Punkte!</p>
      <div class="winter-asteroids-embed">
        <iframe src="winter-asteroids.html" title="Raumschiff Mistelzweig" loading="lazy" allow="autoplay"></iframe>
      </div>
      <p class="small">← → drehen · ↑ Schub · Leertaste feuern · P = Pause · M = Ton</p>
      <p><a href="winter-asteroids.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
    `
  },
  18: {
    title: "Kokosmakronen mit Schokoverzierung",
    emoji: "🥥",
    html: `
      <p><strong>10 Minuten Vorbereitung · 15 Minuten Backzeit · ca. 20 Stück</strong></p>
      <div class="card">
        <h3>Letzter Kuchenmontag vor Weihnachten! 😅</h3>
        <p>Drei Rezepte, drei Montage und vielleicht 3 Montagskuchen</p>
        <p>Falls jemand fragt, ob es nächstes Jahr wieder Montagskuchen gibt: Die Machbarkeit im Rahmen der Ressourcenplanung wird gerade geprüft.</p>
      </div>
      <h3>Zutaten</h3>
      <ul>
        <li>2 Eiweiß</li>
        <li>100 g Zucker</li>
        <li>150 g Kokosraspel</li>
        <li>1 Prise Salz</li>
        <li>Optional: 50 g Zartbitterschokolade</li>
      </ul>
      <h3>Zubereitung</h3>
      <p>Backofen auf 160 °C Ober-/Unterhitze vorheizen. Eiweiß mit Salz steif schlagen, Zucker einrieseln lassen und Kokosraspel unterheben. Mit zwei Teelöffeln kleine Häufchen auf Backpapier setzen. Etwa 12–15 Minuten backen, bis die Spitzen leicht goldbraun sind. Abkühlen lassen und nach Wunsch mit geschmolzener Schokolade verzieren.</p>
    `
  },
  19: {
    title: "Basteln: Buntes Windlicht aus Papier",
    emoji: "⭐",
    html: `
      <p>Heute gibt es eine Anleitung für ein Windlicht. Du brauchst Origamipapier, eine Schere und ein LED-Teelicht.</p>
      <div class="card">
        <ol>
          <li>Falte beide Diagonalen. Wende das Papier und falte es waagerecht und senkrecht in der Mitte. Klappe es entlang der Falze zu einem kleineren Quadrat zusammen.</li>
          <li>Falte die seitlichen Ecken zur Mitte und schneide die übrigen Spitzen ab. Öffne die vier Laschen einzeln und drücke sie entlang der Falze flach, sodass acht schmale Laschen entstehen.</li>
          <li>Falte die Ecken der Laschen zur Mitte und öffne das Papier wieder. Klappe die Spitzen des Achtecks nach innen und lege das Papier wieder zu einer Drachenform zusammen.</li>
          <li>Falte die oberen Spitzen nach unten und die untere Spitze ein Stück nach oben. Öffne den Stern vorsichtig, drücke den Boden flach und stelle ein LED-Teelicht hinein.</li>
        </ol>
        <p><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNYhuqkRJngv6rGmoV2F77k1YDLedNe4l409k3Q0slz-HO1vDG45m-zYRvyHGNibLEizwzXtPC_qdibWWIHOEAt_4UXmm7rAwZS5u4KeO8qE7I_-yWz63N7oCGloqrvuR4D0TM5ClUcAA/s1600/windlicht+falten.png" target="_blank" rel="noopener"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNYhuqkRJngv6rGmoV2F77k1YDLedNe4l409k3Q0slz-HO1vDG45m-zYRvyHGNibLEizwzXtPC_qdibWWIHOEAt_4UXmm7rAwZS5u4KeO8qE7I_-yWz63N7oCGloqrvuR4D0TM5ClUcAA/s1600/windlicht+falten.png" alt="Bildanleitung zum Falten des Papierwindlichts, Teil 1" loading="lazy" style="display:block;max-width:100%;height:auto;margin:0 auto;border-radius:12px;"></a></p>
        <p><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE7kI5380FKVk8YhR0jPDu-MVmskhT8f0upgINTS0UtODUjMnOo0aRGbLrJB8ll6YXNLZxU19JWZT-cdwll5dmu0zbMjZMj17NVI5TF99HhO5HpIHF1jTxg32423hmmAUZ64qwCD_bOvc/s1600/windlicht+falten2.png" target="_blank" rel="noopener"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE7kI5380FKVk8YhR0jPDu-MVmskhT8f0upgINTS0UtODUjMnOo0aRGbLrJB8ll6YXNLZxU19JWZT-cdwll5dmu0zbMjZMj17NVI5TF99HhO5HpIHF1jTxg32423hmmAUZ64qwCD_bOvc/s1600/windlicht+falten2.png" alt="Bildanleitung zum Falten des Papierwindlichts, Teil 2" loading="lazy" style="display:block;max-width:100%;height:auto;margin:0 auto;border-radius:12px;"></a></p>
        <p><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB-Eun5BfUdi1LqCPC92c6LUdppyIkjVLuw1WlXIArVqWqQI-X4u0wn5wQP9iGuHZ09piCMaQe5kuiYP90HopH8Wt8iadI2rH-MwAiGS2KsJrDsq3mH3-Fn8ue__0TLqbH3SZMT_Y0n18/s1600/4.png" target="_blank" rel="noopener"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB-Eun5BfUdi1LqCPC92c6LUdppyIkjVLuw1WlXIArVqWqQI-X4u0wn5wQP9iGuHZ09piCMaQe5kuiYP90HopH8Wt8iadI2rH-MwAiGS2KsJrDsq3mH3-Fn8ue__0TLqbH3SZMT_Y0n18/s1600/4.png" alt="Fertig gefaltetes Windlicht aus Papier" loading="lazy" style="display:block;max-width:100%;height:auto;margin:0 auto;border-radius:12px;"></a></p>
        <p><a href="https://www.elternvommars.com/2018/12/3-einfache-last-minute-geschenkideen.html" target="_blank" rel="noopener">Originalanleitung</a></p>
      </div>
    `
  },
  20: {
    title: "Vorbereitung ist alles",
    emoji: "🖼️",
    html: `
      <img src="https://i.pinimg.com/736x/45/1a/32/451a321a5896dcd3b0f5b99b0a54e018.jpg" alt="Bild zu Türchen 20" loading="lazy" style="display:block;max-width:100%;max-height:70vh;height:auto;margin:0 auto;border-radius:16px;object-fit:contain;" />
    `
  },
  21: {
    title: "Winterjäger",
    emoji: "🎯",
    html: `
      <p>Die Weihnachtsfreunde sausen durchs Winterland. Triff sie und sammle möglichst viele Punkte, bevor die Zeit abläuft!</p>
      <div class="winter-jaeger-embed">
        <iframe src="winterjaeger.html" title="Winterjäger" loading="lazy" allow="autoplay"></iframe>
      </div>
      <p class="small">Klicken oder tippen zum Zielen · 6 Schneebälle pro Ladung · Highscore wird in der Liste gespeichert</p>
      <p><a href="winterjaeger.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
    `
  },
  22: {
    title: "Wichtel-Check: Abwesenheitsnotiz",
    emoji: "📨",
    html: `
      <div class="card">
        <h3>Weiß dein Postfach schon Bescheid?</h3>
        <p>Falls du über die Feiertage nicht erreichbar bist: Abwesenheitsnotiz einrichten und Vertretung sowie Rückkehrdatum eintragen.</p>
        <p class="small">Dann muss niemand mit einer Antwort zwischen den Jahren rechnen. Dein Postfach darf auch Weihnachten feiern. 🎄</p>
      </div>
    `
  },
  23: {
    title: "Weihnachtsgruß",
    emoji: "🎄",
    html: `
      <div class="card">
        <p>Ein herzlicher Weihnachtsgruß an alle, die am 23. Dezember noch im Büro sind! Danke für euren Einsatz. Haltet durch – die Feiertage sind schon ganz nah. Wir wünschen euch schöne und erholsame Weihnachtstage und einen guten Start ins neue Jahr. 🎄</p>
      </div>
    `,
    media: {
      type: "youtube",
      url: "https://www.youtube.com/watch?v=zbnXcsfcEgI",
      title: "Weihnachtsvideo",
      caption: "Viel Spaß beim Anschauen!"
    }
  },
  24: {
    title: "Frohe Weihnachten",
    emoji: "🎁",
    html: `
      <div class="card">
        <p>Wenn am Baum die Lichter brennen,<br>
        darf die Arbeit Pause kennen.<br>
        Ich wünsche euch ein frohes Fest,<br>
        das euch zusammen feiern lässt.</p>
      </div>
      <div class="sudoku-embed">
        <iframe src="mini-sudoku.html" title="Weihnachts-Sudoku" loading="lazy"></iframe>
      </div>
      <p><a href="mini-sudoku.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
    `
  }
};

function reveal(button, answer) {
  const quiz = button.closest(".quiz");
  quiz.querySelectorAll("button").forEach(b => b.disabled = true);
  const result = quiz.querySelector(".quiz-result");
  result.classList.remove("hidden");

  const correct = (quiz.closest(".today-content")?.id || "");
  const day = Number(document.getElementById("todayNumber").textContent);
  const correctAnswer = {5:"A",10:"B"}[day];

  if (answer === correctAnswer) {
    result.innerHTML = "🎯 <strong>Richtig!</strong>";
    result.className = "quiz-result correct";
    document.getElementById(`answer-${day}`)?.classList.remove("hidden");
  } else {
    result.innerHTML = "🙂 Nicht ganz – probier's noch einmal im Kopf.";
    result.className = "quiz-result wrong";
    document.getElementById(`answer-${day}`)?.classList.remove("hidden");
  }
}
