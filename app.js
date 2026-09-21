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
  document.getElementById("todayContent").innerHTML = item.html;

  const section = document.getElementById("today");
  section.classList.remove("hidden");
  if (scroll) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

render();
