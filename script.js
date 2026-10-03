const activation = new Date();
activation.setSeconds(activation.getSeconds() - (18 * 60 + 59));

const expiration = new Date(
  activation.getTime() + 24 * 60 * 60 * 1000
);

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateClock() {
  const now = new Date();

  document.getElementById("currentTime").textContent =
    `${now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    })} ${now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    })}`;

  const elapsed = Math.max(0, now - activation);
  const totalSeconds = Math.floor(elapsed / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("activationTime").textContent =
    `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  const remaining = Math.max(0, expiration - now);
  const remainingSeconds = Math.floor(remaining / 1000);

  const h = Math.floor(remainingSeconds / 3600);
  const m = Math.floor((remainingSeconds % 3600) / 60);
  const s = remainingSeconds % 60;

  document.getElementById("countdown").textContent =
    `${pad(h)}:${pad(m)}:${pad(s)}`;
}

updateClock();
setInterval(updateClock, 1000);