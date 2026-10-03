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
    title: "Der Startschuss",
    emoji: "🎄",
    html: `
      <p>Willkommen beim digitalen Adventskalender! Ab heute gibt es jeden Arbeitstag
      ein kleines Türchen für die Pause.</p>
      <div class="card">
        <h3>Die erste Frage</h3>
        <p>Was gehört für dich unbedingt zu einer guten Adventspause?</p>
        <p class="small">Diskutiert kurz – die beste Antwort muss nicht die offensichtlichste sein. 😉</p>
      </div>
    `
  },
  2: {
    title: "Advent – was heißt das eigentlich?",
    emoji: "🕯️",
    html: `
      <p>„Advent“ kommt vom lateinischen <em>adventus</em> und bedeutet
      <strong>Ankunft</strong>.</p>
      <div class="fact">
        <span>💡</span>
        <div>Die vier Adventssonntage dienen traditionell als Zeit der Vorbereitung
        auf Weihnachten.</div>
      </div>
      <p>Damit wäre das heutige Türchen offiziell ein kleines Sprach- und Geschichtstürchen.</p>
    `
  },
  3: {
    title: "Winter Frogger",
    emoji: "🎄",
    html: `
      <p>Überquere die verschneite Autobahn und erreiche alle drei Weihnachtsnester!</p>
      <div class="frogger-embed">
        <iframe src="frogger.html" title="Winter Frogger" loading="lazy" allow="autoplay"></iframe>
      </div>
      <p class="small">Steuerung: Pfeiltasten oder WASD · Mobil: Steuerkreuz · P = Pause · M = Sound</p>
    `
  },
  4: {
    title: "Die Büro-Challenge",
    emoji: "☕",
    html: `
      <p>Heute gibt es keine Wissensfrage, sondern eine Mini-Challenge.</p>
      <div class="challenge">
        <strong>Schafft es als Team, innerhalb von 60 Sekunden drei Dinge zu finden,
        die alle Anwesenden gerne essen.</strong>
      </div>
      <p class="small">Kaffee zählt nicht. Kaffee ist außerhalb der Wertung. 😄</p>
    `
  },
  5: {
    title: "Baugrund unter dem Weihnachtsbaum",
    emoji: "🪨",
    html: `
      <p>Ein bisschen Fachwissen darf natürlich nicht fehlen.</p>
      <div class="quiz">
        <p><strong>Was beschreibt ein Homogenbereich im Straßenbau am ehesten?</strong></p>
        <button onclick="reveal(this,'A')">A – Einen räumlich und bautechnisch ähnlich zu behandelnden Boden-/Felsbereich</button>
        <button onclick="reveal(this,'B')">B – Ausschließlich einen Bereich gleicher Farbe</button>
        <button onclick="reveal(this,'C')">C – Eine bestimmte Baustellenkolonne</button>
        <div class="quiz-result hidden"></div>
      </div>
      <div class="answer hidden" id="answer-5">
        <strong>Richtig ist A. 🎯</strong><br>
        Homogenbereiche fassen Boden und Fels mit vergleichbaren Eigenschaften
        für die jeweilige bautechnische Bearbeitung zusammen.
      </div>
    `
  },
  6: {
    title: "Nikolaus-Spezial",
    emoji: "🥾",
    html: `
      <p>Heute ist Nikolaus! 🎅</p>
      <div class="card">
        <h3>Die Nikolaus-Suche</h3>
        <p>Schaut euch im Pausenraum um und findet etwas, das heute
        möglichst überzeugend als Nikolausstiefel durchgehen könnte.</p>
        <p>Foto machen erlaubt – öffentliche Bloßstellung nicht. 😉</p>
      </div>
    `
  },
  7: {
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
    title: "Der Weihnachtswitz",
    emoji: "😂",
    html: `
      <div class="joke">
        <p>Warum können Weihnachtsbäume so schlecht stricken?</p>
        <p><strong>Weil sie ständig Nadeln fallen lassen.</strong> 🌲</p>
      </div>
      <p class="small">Ja. Das Niveau ist heute bewusst niedrig. Es ist schließlich Advent.</p>
    `
    // Beispiel für dieses Türchen:
    // ,media: { type: "youtube", url: "https://www.youtube.com/watch?v=VIDEO_ID", title: "Weihnachtsvideo" }
  },
  9: {
    title: "Team-Weihnachtsessen",
    emoji: "🍽️",
    html: `
      <p>Stellt euch vor, unser Team wäre ein Weihnachtsessen.</p>
      <div class="card">
        <p><strong>Welches Gericht wären wir – und warum?</strong></p>
        <p>Glühwein zählt als Getränk und damit nicht als Ausweichantwort.</p>
      </div>
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
    title: "Weihnachtsmusik",
    emoji: "🎵",
    html: `
      <p>Heute ist die musikalische Tür.</p>
      <div class="card">
        <p><strong>Jede Person darf ein Weihnachtslied nennen, das sie freiwillig
        den ganzen Dezember hören würde.</strong></p>
        <p>Und anschließend eines, das sie definitiv nicht mehr hören kann.</p>
      </div>
    `
    // Beispiel für eine eigene MP3-Datei im Unterordner audio:
    // ,media: { type: "audio", src: "audio/weihnachtslied.mp3", caption: "Kopfhörer auf oder gemeinsam anhören." }
  },
  12: {
    title: "Halbzeit!",
    emoji: "⭐",
    html: `
      <p>12 von 24 Türchen sind geschafft.</p>
      <div class="card">
        <h3>Halbzeitfrage</h3>
        <p>Welches Türchen war bisher euer Favorit?</p>
        <p>Und was sollte in den verbleibenden 12 Türchen unbedingt noch vorkommen?</p>
      </div>
    `
  },
  13: {
    title: "Das Loch-Rätsel",
    emoji: "🔎",
    html: `
      <p>Was wird größer, je mehr man davon wegnimmt?</p>
      <div class="answer">
        <strong>Ein Loch.</strong> 🕳️
      </div>
      <p class="small">Ein Rätsel, das erstaunlich gut in die Welt von Baugruben passt.</p>
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
    title: "60-Sekunden-Teamchallenge",
    emoji: "🏆",
    html: `
      <div class="challenge">
        <h3>Auf die Plätze, fertig, los!</h3>
        <p>Ihr habt <strong>60 Sekunden</strong>, um gemeinsam fünf Dinge zu nennen,
        die mit „Weihnachten“ beginnen oder enden.</p>
        <p class="small">Beispiele zählen natürlich nicht.</p>
      </div>
    `
  },
  16: {
    title: "Das kleine Türchen",
    emoji: "✨",
    html: `
      <p>Heute gibt es bewusst keine Aufgabe.</p>
      <div class="big-message">
        <strong>Mach einfach fünf Minuten Pause.</strong>
        <span>☕</span>
      </div>
      <p>Ohne Mails. Ohne Teams. Ohne Excel. Einfach Pause.</p>
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
    `
  },
  18: {
    title: "Verdächtiges Geschenk",
    emoji: "🎁",
    html: `
      <p>Oh schön du hast ein Geschenk erhalten. Aber was tickt denn da so verdächtig? Lies die Hinweise am Gehäuse, schlage im Wichtel-Handbuch nach und löse alle Module, bevor deine Zeit abgelaufen ist.</p>
      <div class="artillery-embed">
        <iframe src="keep-talking-weihnachten.html" title="Verdächtiges Geschenk" loading="lazy"></iframe>
      </div>
      <p class="small">Drei Schwierigkeitsstufen · fünf Module · solo oder zu zweit mit getrennten Ansichten. Auf dem Handy kannst du zwischen Geschenk und Handbuch wechseln.</p>
      <p><a href="keep-talking-weihnachten.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
    `
  },
  19: {
    title: "Baustellenhumor",
    emoji: "🚧",
    html: `
      <p>Was ist der Unterschied zwischen einem Weihnachtswunsch
      und einer Planungsänderung?</p>
      <div class="answer">
        <strong>Beim Weihnachtswunsch weiß man wenigstens,
        dass er nicht immer erfüllt wird.</strong> 😄
      </div>
    `
  },
  20: {
    title: "Das wichtigste Türchen",
    emoji: "🧘",
    html: `
      <div class="big-message">
        <strong>Heute musst du nichts lösen.</strong>
        <span>☕</span>
      </div>
      <p>Setz dich hin. Trink etwas. Rede mit den Kollegen.
      Und lass die Arbeit für fünf Minuten Arbeit sein.</p>
    `
  },
  21: {
    title: "Verdächtiges Geschenk",
    emoji: "🚜",
    html: `
      <p>Oh schön du hast ein Geschenk erhalten. Aber was tickt denn da so verdächtig? Lies die Hinweise am Gehäuse, schlage im Wichtel-Handbuch nach und löse alle Module, bevor deine Zeit abgelaufen ist.</p>
      <div class="artillery-embed">
        <iframe src="keep-talking-weihnachten.html" title="Verdächtiges Geschenk" loading="lazy"></iframe>
      </div>
      <p class="small">Drei Schwierigkeitsstufen · fünf Module · solo oder zu zweit mit getrennten Ansichten. Auf dem Handy kannst du zwischen Geschenk und Handbuch wechseln.</p>
      <p><a href="keep-talking-weihnachten.html" target="_blank" rel="noopener">Spiel in einem neuen Tab öffnen</a></p>
    `
  },
  22: {
    title: "Jahresrückblick",
    emoji: "📸",
    html: `
      <p>Es geht langsam Richtung Weihnachten.</p>
      <div class="card">
        <h3>Eine Frage zum Jahresende</h3>
        <p>Was war dein persönliches Highlight des Jahres?</p>
        <p>Es darf beruflich, privat, lustig oder völlig unspektakulär sein.</p>
      </div>
    `
  },
  23: {
    title: "Fast geschafft",
    emoji: "🎅",
    html: `
      <p>Das vorletzte Türchen.</p>
      <div class="big-message">
        <strong>Stress runter.<br>Vorfreude hoch.</strong>
        <span>🎄</span>
      </div>
      <p>Und falls noch fünf Dinge vor Weihnachten erledigt werden müssen:
      Morgen sind es wahrscheinlich immer noch fünf. 😉</p>
    `
  },
  24: {
    title: "Weihnachts-Sudoku",
    emoji: "🎁",
    html: `
      <p>Fülle das weihnachtliche Sudoku: Jedes Symbol darf in jeder Zeile, Spalte und jedem 3×3-Block genau einmal vorkommen.</p>
      <div class="sudoku-embed">
        <iframe src="mini-sudoku.html" title="Weihnachts-Sudoku" loading="lazy"></iframe>
      </div>
      <p class="small">Tippe ein leeres Feld und wähle anschließend unten das passende Symbol. Mit „Lösung prüfen“ kontrollierst du dein Rätsel.</p>
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
