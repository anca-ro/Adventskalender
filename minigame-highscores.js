(function () {
  const storageKey = "adventMiniGameHighscores";

  window.recordAdventMiniGameHighscore = function (game, score, lowerIsBetter = false) {
    const value = Math.floor(Number(score));
    if (!Number.isFinite(value) || value <= 0) return false;

    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "{}");
      const scores = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
      const current = Number(scores[game] || 0);
      const improved = lowerIsBetter ? current === 0 || value < current : value > current;
      if (improved) {
        scores[game] = value;
        localStorage.setItem(storageKey, JSON.stringify(scores));
      }
    } catch (_) {}

    if (window.parent !== window) {
      try {
        const targetOrigin = location.origin === "null" ? "*" : location.origin;
        window.parent.postMessage({ type: "advent-minigame-highscore", game, score: value }, targetOrigin);
      } catch (_) {}
    }
    return true;
  };
})();
