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
    title: "Lebkuchenmann auf dem Heimweg",
    emoji: "🎄",
    html: `
      <p>Ohje... da hat wohl jemand die Fußgängerbrücke vergessen und eine Verkehrssicherung gibt es auch nicht.</p>
      <div class="frogger-embed">
        <iframe src="frogger.html" title="Lebkuchenmann auf dem Heimweg" loading="lazy" allow="autoplay"></iframe>
      </div>
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
    title: "Dänisches Weihnachtsbasteln",
    emoji: "✂️",
    html: `
      <p>Heute gibt es zwei klassische Bastelideen aus Papier: das geflochtene Weihnachtsherz und einen gefalteten Papierstern.</p>
      <div class="card">
        <h3>Flecht-Weihnachtsherz · <em>julehjerte</em></h3>
        <p><strong>Du brauchst:</strong> zwei Blätter Papier in verschiedenen Farben, Lineal, Bleistift, Schere und einen schmalen Papierstreifen für den Henkel.</p>
        <ol>
          <li>Schneide aus beiden Farben je einen Streifen von etwa 8 × 20 cm aus und falte ihn in der Mitte.</li>
          <li>Runde die offenen Enden ab. Schneide vom Falz aus zwei parallele Schlitze hinein, ohne bis zum Rand durchzuschneiden.</li>
          <li>Lege die gefalteten Stücke im rechten Winkel aneinander. Flechte die Streifen abwechselnd durch- und umeinander, bis ein Karomuster entsteht.</li>
          <li>Klebe innen einen Papierstreifen als Henkel fest.</li>
        </ol>
        <p class="small"><a href="https://nordisk.de/blogs/artikel/weihnachtsherzen-flechten-anleitung" target="_blank" rel="noopener">Bildanleitung für das Flechtherz</a></p>
      </div>
      <div class="card">
        <h3>Papierstern</h3>
        <p><strong>Du brauchst:</strong> vier lange Papierstreifen und etwas Faden zum Aufhängen.</p>
        <p>Falte die Streifen in der Mitte und verschränke sie zu einem kleinen Flechtquadrat. Falte die Streifen nacheinander über die Mitte, um die flachen Zacken zu formen. Wende den Stern, wiederhole die Schritte auf der Rückseite und kürze die Enden.</p>
        <p class="small"><a href="https://www.spektrum.de/fm/976/Anleitung_Froebelsterne.pdf" target="_blank" rel="noopener">Bebilderte Anleitung für den Papierstern</a></p>
      </div>
    `
  },
  6: {
    title: "Weihnachtsbild",
    emoji: "🖼️",
    html: `
      <img src="https://i.pinimg.com/1200x/67/2f/ee/672feef8844da771f64cdf898126ac05.jpg" alt="Bild zu Türchen 6" loading="lazy" style="display:block;max-width:100%;max-height:70vh;height:auto;margin:0 auto;border-radius:16px;object-fit:contain;" />
    `
  },  7: {
    title: "Schneeballschlacht",
    emoji: "🐸",
    html: `
      <p>Zwei Teams, sechs Wichtel und ein sehr frostiges Duell. Wechselt euch ab und bringt das gegnerische Team mit Schneebällen, Geschenkbomben und Zuckerstangen-Schüssen ins Wanken!</p>
      <div class="artillery-embed">
        <iframe src="schneeballschlacht.html" title="Schneeballschlacht" loading="lazy" allow="autoplay"></iframe>
      </div>
      <p class="small">Steuerung: ← → laufen · ↑ ↓ zielen · Leertaste halten und loslassen · 1–3 Waffen wechseln</p>
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
    title: "Winterjäger",
    emoji: "🎯",
    html: `
      <p>Die Weihnachtsfreunde sausen durchs Winterland. Triff sie und sammle möglichst viele Punkte, bevor die Zeit abläuft!</p>
      <div class="winter-jaeger-embed">
        <iframe src="winterjaeger.html" title="Winterjäger" loading="lazy" allow="autoplay"></iframe>
      </div>
      <p class="small">Klicken oder tippen zum Zielen · 6 Schneebälle pro Ladung · Highscore wird in der Liste gespeichert</p>
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
    title: "Basteln: Weihnachtsanhänger aus Pappe",
    emoji: "🎄",
    html: `
      <p>Aus Verpackungskarton wird ein persönlicher Baumschmuck.</p>
      <div class="card">
        <p><strong>Du brauchst:</strong> ein Stück dünne Pappe, Schere, Stift, Wolle oder Schnur und Stifte oder Papierreste zum Verzieren.</p>
        <ol>
          <li>Zeichne einen Stern, Baum oder eine Glocke auf die Pappe und schneide die Form aus.</li>
          <li>Verziere den Anhänger mit Farben, Papierstücken oder darum gewickelter Wolle.</li>
          <li>Stich oben vorsichtig ein Loch hinein und ziehe einen Faden zum Aufhängen hindurch.</li>
        </ol>
        <p class="small">Tipp: Alte Versandkartons eignen sich prima als Bastelpappe.</p>
      </div>
    `
  },
  13: {
    title: "Weihnachtsbild",
    emoji: "🖼️",
    html: `
      <img src="https://i.pinimg.com/736x/81/0c/33/810c3363c51088ef8fdc2b80fe90ff25.jpg" alt="Bild zu Türchen 13" loading="lazy" style="display:block;max-width:100%;max-height:70vh;height:auto;margin:0 auto;border-radius:16px;object-fit:contain;" />
    `
  },
  14: {
    title: "Winterräumer",
    emoji: "❄️",
    html: `
      <p>Mach die Wege frei für den Weihnachtsmann! Räume die Schneeflocken ab, weiche den Wichteln aus und sammle Pylone für einen kurzen Räum-Power-Schub.</p>
      <div class="winter-raeumer-embed">
        <iframe src="winterraeumer.html" title="Winterräumer – Winter-Arcade-Spiel" loading="lazy" allow="autoplay"></iframe>
      </div>
      <p class="small">Pfeiltasten oder WASD · Mobil: wischen oder die Richtungstasten benutzen</p>
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
    title: "Winterwissen: Tiere im Winter",
    emoji: "🦔",
    html: `
      <div class="fact">
        <span>🐾</span>
        <div>Tiere kommen auf verschiedene Weise durch den Winter: Igel halten Winterschlaf, manche Zugvögel ziehen in wärmere Gegenden und andere Tiere bleiben aktiv.</div>
      </div>
      <p>Ein Spaziergang im Schnee kann ihre Spuren sichtbar machen – zum Beispiel kleine Pfotenabdrücke oder Vogelspuren.</p>
      <p class="small"><a href="https://www.nabu-aachen-land.de/mitteilung/von-frostschutz-bis-winterschlaf-tierische-ueberwinterungsstrategien" target="_blank" rel="noopener">Mehr zu Überwinterungsstrategien</a></p>
    `
  },
  17: {
    title: "Asteroids",
    emoji: "🎯",
    html: `
      <p>Zerlege die Christbaumkugeln im winterlichen Asteroids-Spiel und sammle möglichst viele Punkte!</p>
      <div class="winter-asteroids-embed">
        <iframe src="winter-asteroids.html" title="Winter Asteroids" loading="lazy" allow="autoplay"></iframe>
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
        <p>Drei Montage, drei Rezepte, 3 Montagskuchen – und kein einziges Mal musste ich dafür ins Büro. Ich nenne das moderne Arbeitsorganisation.</p>
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
    title: "Basteln: Geschenktüte aus Packpapier",
    emoji: "🎁",
    html: `
      <p>Eine kleine Tüte für ein Geschenk oder ein paar Plätzchen – aus altem Packpapier oder einer aufgefalteten Papiertüte.</p>
      <div class="card">
        <p><strong>Du brauchst:</strong> Papier, Schere, Klebeband oder Klebestift, Schnur und optional Stifte.</p>
        <ol>
          <li>Rolle das Papier zu einem Schlauch und klebe die lange Kante mit einer kleinen Überlappung fest.</li>
          <li>Falte das untere Ende nach oben, klappe es wie einen Briefumschlag auf und klebe die entstandenen Bodenlaschen fest.</li>
          <li>Öffne die Tüte, falte den oberen Rand um und verziere sie nach Wunsch.</li>
          <li>Für einen Henkel kannst du zwei Löcher in den oberen Rand stechen und Schnur durchziehen.</li>
        </ol>
      </div>
    `
  },
  20: {
    title: "Weihnachtsbild",
    emoji: "🖼️",
    html: `
      <img src="https://i.pinimg.com/736x/45/1a/32/451a321a5896dcd3b0f5b99b0a54e018.jpg" alt="Bild zu Türchen 20" loading="lazy" style="display:block;max-width:100%;max-height:70vh;height:auto;margin:0 auto;border-radius:16px;object-fit:contain;" />
    `
  },
  21: {
    title: "Verdächtiges Geschenk",
    emoji: "🚜",
    html: `
      <div class="gift-embed">
        <iframe src="keep-talking-weihnachten.html" title="Verdächtiges Geschenk" loading="lazy"></iframe>
      </div>
      <p><a href="keep-talking-weihnachten.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
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
    title: "Weihnachtsgruß aus dem Büro",
    emoji: "🎄",
    html: `
      <div class="card">
        <h3>Liebe Kolleginnen und Kollegen,</h3>
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
    title: "Weihnachts-Sudoku",
    emoji: "🎁",
    html: `
      <div class="sudoku-embed">
        <iframe src="mini-sudoku.html" title="Weihnachts-Sudoku" loading="lazy"></iframe>
      </div>
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
