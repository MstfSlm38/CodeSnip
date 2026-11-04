(() => {
  const headline = document.getElementById("headline");

  if (!headline) return;

  const random = Math.random();

  if (random < 0.70) {
    headline.textContent = "Hemen geleceğiz.";
  } else if (random < 0.85) {
    headline.textContent = "Biz de heyecanlıyız.";
  } else {
    headline.textContent = "Erken gelmişsin.";
  }

  const message = document.querySelector(".message");
  const accent = document.querySelector(".accent");

  if (!message || !accent) return;

  const dateLabel = document.createElement("p");
  dateLabel.className = "countdown-date";
  dateLabel.textContent = "4 Kasım Çarşamba, 17:00";
  dateLabel.setAttribute("aria-label", "Hedef tarih: 4 Kasım Çarşamba, saat 17:00");

  const countdown = document.createElement("div");
  countdown.className = "countdown";
  countdown.setAttribute("role", "timer");
  countdown.setAttribute("aria-label", "Belirtilen tarihe kalan süre");

  const track = document.createElement("div");
  track.className = "countdown-track";
  track.setAttribute("aria-hidden", "true");

  const fill = document.createElement("div");
  fill.className = "countdown-fill";
  track.appendChild(fill);

  const time = document.createElement("p");
  time.className = "countdown-time";
  time.textContent = "Geri sayım yükleniyor…";

  countdown.append(track, time);
  message.insertAdjacentElement("afterend", dateLabel);
  dateLabel.insertAdjacentElement("afterend", countdown);
  accent.remove();

  // 4 Kasım 2026, Türkiye saatiyle 17.00.
  const target = new Date("2026-11-04T17:00:00+03:00").getTime();
  const start = Date.now();
  const total = target - start;
  let redirected = false;

  const updateCountdown = () => {
    const remaining = target - Date.now();

    if (remaining <= 0) {
      time.textContent = "CodeSnip 26Q3.5 yayında!";
      fill.style.width = "100%";
      countdown.setAttribute("aria-label", "Yeni CodeSnip sayfasına yönlendiriliyor");

      if (!redirected) {
        redirected = true;
        window.location.replace("release.html");
      }
      return;
    }

    const days = Math.floor(remaining / 86400000);
    const hours = Math.floor((remaining % 86400000) / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);

    time.textContent = `${days} gün · ${hours} saat · ${minutes} dakika · ${seconds} saniye kaldı`;
    fill.style.width = `${Math.max(2, Math.min(100, (1 - remaining / total) * 100))}%`;
    countdown.setAttribute("aria-label", time.textContent);
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();