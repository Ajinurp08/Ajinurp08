function showMessage() {
  const message = document.getElementById("message");
  message.classList.toggle("hidden");
}

document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const kehadiran = document.getElementById("kehadiran").value;
  const ucapan = document.getElementById("ucapan").value.trim();
  const rsvpMessage = document.getElementById("rsvpMessage");
  const guestBook = document.getElementById("guestBook");

  if (kehadiran === "Hadir") {
    rsvpMessage.textContent = `Terima kasih banyak, ${nama}! Kami sangat senang Anda akan hadir di hari istimewa kami 🙏💕`;
  } else {
    rsvpMessage.textContent = `Terima kasih atas konfirmasinya, ${nama}. Kami mengerti jika tidak bisa hadir. Doakan yang terbaik untuk kami ya 💌😊`;
  }

  // Tambahkan ke daftar ucapan
  const entry = document.createElement("div");
  entry.className = "guest-entry";
  entry.innerHTML = `<strong>${nama}</strong> (${kehadiran})<br><em>"${ucapan}"</em>`;
  guestBook.prepend(entry);

  this.reset();
});

// Musik Otomatis via JS (tanpa audio di HTML)
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.src = "music.mp3";
  audio.loop = true;
  audio.autoplay = true;
  audio.muted = true;
  audio.playsInline = true;
  document.body.appendChild(audio);

  audio.play();

  document.body.addEventListener("click", () => {
    audio.muted = false;
    audio.play();
  }, { once: true });
});
