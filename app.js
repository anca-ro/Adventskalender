const TZ = "Europe/Berlin";
const END_DAY = 24;

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
  if (d.month < 12 || (d.month === 12 && d.day < 1))
    return { state: "before", day: 0, year: d.year };
  if (d.month > 12 || (d.month === 12 && d.day > END_DAY))
    return { state: "after", day: END_DAY, year: d.year };
  return { state: "during", day: d.day, year: d.year };
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

    if (unlocked) button.addEventListener("click", () => showDoor(i));
    calendar.appendChild(button);
  }

  if (state.state === "during") showDoor(state.day, false);
  else if (state.state === "after") showDoor(24, false);
}

function showDoor(day, scroll = true) {
  const item = ADVENT_CONTENT[day];
  document.getElementById("todayNumber").textContent = day;
  document.getElementById("todayTitle").textContent = item.title;
  document.getElementById("todayEmoji").textContent = item.emoji;
  document.getElementById("todayContent").innerHTML = item.html + renderMedia(item.media);

  const section = document.getElementById("today");
  section.classList.remove("hidden");
  if (scroll) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

render();
