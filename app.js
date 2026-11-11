const TZ = "Europe/Berlin";
const END_DAY = 24;
const TEST_MODE = true; // Vor dem echten Einsatz wieder auf false setzen.

function berlinDateParts() {
  const parts = new Intl.DateTimeFormat("de-DE", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit"
  }).formatToParts(new Date());
  const out = {};
  for (const p of parts) if (p.type !== "literal") out[p.type] = p.value;
  return { year: Number(out.year), month: Number(out.month), day: Number(out.day) };
}

function getAdventState() {
  const d = berlinDateParts();
  if (TEST_MODE) {
    return { state: "after", day: END_DAY, year: d.year };
  }
  if (d.month === 12 && d.day <= END_DAY) {
    return { state: "during", day: d.day, year: d.year };
  }
  if (d.month === 12 || d.month === 1) {
    return { state: "after", day: END_DAY, year: d.year };
  }
  return { state: "before", day: 0, year: d.year };
}


function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getYouTubeId(value) {
  if (!value) return null;
  const input = String(value).trim();

  // Eine reine Video-ID kann direkt verwendet werden.
  if (/^[A-Za-z0-9_-]{11}$/.test(input)) return input;

  try {
    const url = new URL(input);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return /^[A-Za-z0-9_-]{11}$/.test(id || "") ? id : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com" || host === "music.youtube.com") {
      if (url.pathname === "/watch") {
        const id = url.searchParams.get("v");
        return /^[A-Za-z0-9_-]{11}$/.test(id || "") ? id : null;
      }

      const parts = url.pathname.split("/").filter(Boolean);
      if (["embed", "shorts", "live"].includes(parts[0])) {
        const id = parts[1];
        return /^[A-Za-z0-9_-]{11}$/.test(id || "") ? id : null;
      }
    }
  } catch (_) {
    return null;
  }

  return null;
}

function renderMedia(media) {
  if (!media || !media.type) return "";

  const caption = media.caption
    ? `<p class="media-caption">${escapeHtml(media.caption)}</p>`
    : "";

  if (media.type === "audio") {
    if (!media.src) return "";
    const src = escapeHtml(media.src);
    const mime = escapeHtml(media.mime || "audio/mpeg");

    return `
      <div class="media-card">
        <div class="media-heading">🎵 Musik</div>
        <audio class="audio-player" controls preload="metadata">
          <source src="${src}" type="${mime}">
          Dein Browser unterstützt die Audiowiedergabe leider nicht.
        </audio>
        ${caption}
      </div>
    `;
  }

  if (media.type === "youtube") {
    const id = getYouTubeId(media.url || media.id);
    if (!id) {
      return `
        <div class="media-card media-error">
          <strong>Video konnte nicht eingebunden werden.</strong>
          <p>Bitte prüfe die YouTube-URL bzw. Video-ID in <code>content.js</code>.</p>
        </div>
      `;
    }

    const title = escapeHtml(media.title || "YouTube-Video zum Adventstürchen");
    return `
      <div class="media-card">
        <div class="media-heading">🎬 Video</div>
        <div class="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${id}"
            title="${title}"
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
        ${caption}
      </div>
    `;
  }

  return "";
}

function isSmartphone() {
  if (!window.matchMedia("(pointer: coarse)").matches) return false;
  const shortSide = Math.min(
    window.screen?.width || window.innerWidth,
    window.screen?.height || window.innerHeight
  );
  return shortSide <= 600;
}

function prepareMiniGameForPhone(item, openInNewTab) {
  if (!isSmartphone()) return item.html;

  const template = document.createElement("template");
  template.innerHTML = item.html;
  const frame = template.content.querySelector("iframe[src]");
  if (!frame) return item.html;

  let gameUrl;
  try {
    gameUrl = new URL(frame.getAttribute("src"), window.location.href);
  } catch (_) {
    return item.html;
  }
  if (gameUrl.origin !== window.location.origin || !/\.html$/i.test(gameUrl.pathname)) return item.html;

  if (openInNewTab) window.open(gameUrl.href, "_blank", "noopener,noreferrer");

  const notice = document.createElement("div");
  notice.className = "mobile-game-tab-notice";
  notice.setAttribute("role", "status");

  const message = document.createElement("p");
  message.textContent = openInNewTab
    ? "Das Minispiel sollte sich in einem neuen Tab geöffnet haben. Falls nicht, tippe hier:"
    : "Dieses Minispiel wird auf dem Smartphone in einem eigenen Tab gespielt.";

  const link = document.createElement("a");
  link.href = gameUrl.href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = (frame.title || "Minispiel") + " in neuem Tab öffnen";
  notice.append(message, link);
  frame.replaceWith(notice);

  template.content.querySelectorAll('a[target="_blank"]').forEach(existingLink => {
    try {
      if (new URL(existingLink.href, window.location.href).href === gameUrl.href) existingLink.remove();
    } catch (_) {}
  });
  return template.innerHTML;
}
function render() {
  const state = getAdventState();
  document.getElementById("year").textContent = state.year;

  const status = document.getElementById("status");
  const calendar = document.getElementById("calendar");

  if (state.state === "before") {
    status.innerHTML = "🎁 Der Adventskalender öffnet sich am <strong>1. Dezember</strong>.";
  } else if (state.state === "after") {
    status.innerHTML = "🎄 Alle 24 Türchen sind geöffnet!";
  } else {
    status.innerHTML = `Heute ist <strong>Türchen ${state.day}</strong> geöffnet.`;
  }

  calendar.innerHTML = "";

  for (let i = 1; i <= 24; i++) {
    const item = ADVENT_CONTENT[i];
    const unlocked = state.state === "after" || (state.state === "during" && i <= state.day);
    const current = state.state === "during" && i === state.day;

    const button = document.createElement("button");
    button.className = "door" + (unlocked ? "" : " locked") + (current ? " current" : "");
    button.setAttribute("aria-label",
      unlocked ? `Türchen ${i} öffnen` : `Türchen ${i} ist noch verschlossen`);

    button.innerHTML = `
      <span class="num">${i}</span>
      <span class="label">${unlocked ? item.title : "Noch verschlossen"}</span>
      <span class="emoji">${unlocked ? item.emoji : "🔒"}</span>
    `;

    if (unlocked) button.addEventListener("click", () => showDoor(i, true, true));
    calendar.appendChild(button);
  }

  if (state.state === "during") showDoor(state.day, false);
  else if (state.state === "after") showDoor(24, false);
}

function showDoor(day, scroll = true, openMiniGameInNewTab = false) {
  const item = ADVENT_CONTENT[day];
  document.getElementById("todayNumber").textContent = day;
  document.getElementById("todayTitle").textContent = item.title;
  document.getElementById("todayEmoji").textContent = item.emoji;
  document.getElementById("todayContent").innerHTML = prepareMiniGameForPhone(item, openMiniGameInNewTab) + renderMedia(item.media);

  const section = document.getElementById("today");
  section.classList.remove("hidden");
  if (scroll) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

const highscoreStorageKey = "adventMiniGameHighscores";
const legacyFroggerKey = "winterFroggerHighscore";
const highscoreGames = [
  { id: "winterFrogger", door: 3, name: "🐸 Winter Frogger", unit: "Punkte" },
  { id: "snowballBattle", door: 7, name: "❄️ Schneeballschlacht", unit: "Siegpunkte" },
  { id: "winterJaeger", door: 10, name: "🎯 Winterjäger", unit: "Punkte" },
  { id: "winterRaeumer", door: 14, name: "🚜 Winterräumer", unit: "Punkte" },
  { id: "winterAsteroids", door: 17, name: "🌌 Winter Asteroids", unit: "Punkte" },
  { id: "keepTalkingWeihnachten", door: 21, name: "🎁 Verdächtiges Geschenk", format: "remainingTime" },
  { id: "winterSudoku", door: 24, name: "🧩 Weihnachts-Sudoku", format: "bestTime", lowerIsBetter: true }
];

function getHighscores() {
  let stored = {};
  try {
    const parsed = JSON.parse(localStorage.getItem(highscoreStorageKey) || "{}");
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) stored = parsed;
  } catch (_) {}

  const legacyKeys = { winterFrogger: legacyFroggerKey, winterJaeger: "winterjaeger-high" };
  for (const [game, key] of Object.entries(legacyKeys)) {
    try {
      const legacy = Number(localStorage.getItem(key) || 0);
      if (Number.isFinite(legacy) && legacy > Number(stored[game] || 0)) stored[game] = legacy;
    } catch (_) {}
  }
  return stored;
}

function formatHighscoreTime(value) {
  const seconds = Math.max(0, Math.floor(Number(value) || 0));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function formatHighscore(game, value) {
  if (game.format === "remainingTime") return `Restzeit ${formatHighscoreTime(value)}`;
  if (game.format === "bestTime") return `Bestzeit ${formatHighscoreTime(value)}`;
  return `${Number(value).toLocaleString("de-DE")} ${game.unit}`;
}

function renderHighscores() {
  const list = document.getElementById("highscoresList");
  if (!list) return;
  const scores = getHighscores();
  const state = getAdventState();
  const unlockedThrough = state.state === "after" ? END_DAY : state.day;
  const visibleGames = highscoreGames.filter(game => game.door <= unlockedThrough);
  if (!visibleGames.length) {
    list.innerHTML = '<li class="highscores-empty">Die Minispiel-Highscores erscheinen mit dem ersten geöffneten Spieltürchen.</li>';
    return;
  }
  list.innerHTML = visibleGames.map(game => {
    const score = Number(scores[game.id] || 0);
    const label = score > 0 ? formatHighscore(game, score) : "Noch kein Bestwert";
    return `<li><span class="highscore-game">${escapeHtml(game.name)}</span><span class="highscore-score">${escapeHtml(label)}</span></li>`;
  }).join("");
}

const toggleHighscores = document.getElementById("toggleHighscores");
const highscoresPanel = document.getElementById("highscoresPanel");
toggleHighscores?.addEventListener("click", () => {
  const expanded = toggleHighscores.getAttribute("aria-expanded") === "true";
  toggleHighscores.setAttribute("aria-expanded", String(!expanded));
  if (highscoresPanel) highscoresPanel.hidden = expanded;
});

window.addEventListener("message", event => {
  if (event.origin !== window.location.origin || event.data?.type !== "advent-minigame-highscore") return;
  const game = highscoreGames.find(item => item.id === event.data.game);
  const score = Number(event.data.score);
  if (!game || !Number.isFinite(score) || score <= 0) return;
  const scores = getHighscores();
  const current = Number(scores[game.id] || 0);
  const improved = game.lowerIsBetter ? current === 0 || score < current : score > current;
  if (improved) scores[game.id] = Math.floor(score);
  localStorage.setItem(highscoreStorageKey, JSON.stringify(scores));
  renderHighscores();
});

window.addEventListener("storage", event => {
  if ([highscoreStorageKey, legacyFroggerKey, "winterjaeger-high", null].includes(event.key)) renderHighscores();
});

document.getElementById("resetHighscores")?.addEventListener("click", () => {
  localStorage.removeItem(highscoreStorageKey);
  localStorage.removeItem(legacyFroggerKey);
  localStorage.removeItem("winterjaeger-high");
  renderHighscores();
});

render();
renderHighscores();
