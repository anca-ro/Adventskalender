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
    title: "Das klassische Rätsel",
    emoji: "🧩",
    html: `
      <p>Ich habe viele Nadeln, kann aber nicht nähen. Ich stehe im Wohnzimmer
      und werde im Dezember besonders wichtig.</p>
      <div class="answer"><strong>Was bin ich?</strong><br><br>
      Ein Weihnachtsbaum. 🎄</div>
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
    title: "Schätz mal!",
    emoji: "🔢",
    html: `
      <p>Wie viel Kaffee wird wohl in einem Büro mit 10 Personen
      während einer normalen Arbeitswoche getrunken?</p>
      <div class="estimate">
        <div>☕ <strong>1 Liter</strong></div>
        <div>☕☕ <strong>5 Liter</strong></div>
        <div>☕☕☕ <strong>10 Liter</strong></div>
        <div>☕☕☕☕ <strong>20+ Liter</strong></div>
      </div>
      <p class="small">Es gibt heute keine falsche Antwort – nur interessante
      Begründungen. 😄</p>
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
  title: "Video-Türchen",
  emoji: "🎬",
  html: `<p>Heute gibt es ein kleines Video.</p>`,
  media: {
    type: "youtube",
    url: "https://www.youtube.com/watch?v=NL4D1PcgZd4",
    title: "Weihnachtsvideo",
    caption: "Viel Spaß beim Anschauen!"
  }
},  
  10: {
    title: "Geotechnik-Quiz",
    emoji: "🧪",
    html: `
      <p>Heute wird es fachlich.</p>
      <div class="quiz">
        <p><strong>Welche Information ist für die Beurteilung eines Baugrunds besonders wichtig?</strong></p>
        <button onclick="reveal(this,'A')">A – Nur die Bodenfarbe</button>
        <button onclick="reveal(this,'B')">B – Aufbau, Eigenschaften und Grundwasserverhältnisse</button>
        <button onclick="reveal(this,'C')">C – Nur das Baujahr des Nachbargebäudes</button>
        <div class="quiz-result hidden"></div>
      </div>
      <div class="answer hidden" id="answer-10">
        <strong>Richtig ist B. 🎯</strong><br>
        Für Planung und Bemessung sind die relevanten Boden-/Felseigenschaften
        und die Wasserverhältnisse entscheidend.
      </div>
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
    title: "Winterwissen",
    emoji: "❄️",
    html: `
      <p>Warum fühlt sich Metall im Winter oft kälter an als Holz,
      obwohl beide Gegenstände dieselbe Temperatur haben können?</p>
      <div class="fact">
        <span>💡</span>
        <div>Metall leitet Wärme wesentlich besser. Es entzieht deiner Hand
        die Wärme schneller – dadurch fühlt es sich kälter an.</div>
      </div>
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
    title: "Das Maßband-Rätsel",
    emoji: "📏",
    html: `
      <p>Wie viele Meter Geschenkband bräuchte man ungefähr,
      um einen typischen Büroraum einmal komplett zu umrunden?</p>
      <div class="card">
        <p><strong>Schätzung:</strong> 10 m, 20 m, 30 m oder mehr?</p>
        <p>Die Aufgabe besteht nicht darin, es exakt zu wissen,
        sondern möglichst gut zu schätzen.</p>
      </div>
    `
  },
  18: {
    title: "Advents-Bingo",
    emoji: "🎲",
    html: `
      <p>Heute geht es ums Zuhören.</p>
      <div class="bingo">
        <div>„Wo ist der Kaffee?“</div>
        <div>„Wie schnell Weihnachten wieder kommt!“</div>
        <div>„Ich bin dieses Jahr schon fertig mit den Geschenken.“</div>
        <div>„Das machen wir noch vor Weihnachten.“</div>
      </div>
      <p><strong>Aufgabe:</strong> Wer hört heute zuerst drei dieser Sätze?</p>
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
    title: "Das Winterrätsel",
    emoji: "☃️",
    html: `
      <p>Was kann man im Winter sehen, aber nicht anfassen,
      obwohl es überall sein kann?</p>
      <div class="answer"><strong>Die Kälte.</strong> ❄️</div>
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
    title: "Frohe Weihnachten!",
    emoji: "🎁",
    html: `
      <div class="christmas-final">
        <div class="final-icon">🎄</div>
        <h2>Geschafft!</h2>
        <p>24 Türchen, Rätsel, Kaffee, Fachwissen und hoffentlich
        ein paar gute Pausen liegen hinter euch.</p>
        <p><strong>Vielen Dank fürs Mitmachen!</strong></p>
        <p>Ich wünsche euch frohe Weihnachten, erholsame Feiertage
        und einen guten Start ins neue Jahr.</p>
        <div class="final-icons">🎅 ✨ 🎁 ✨ 🎄</div>
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
