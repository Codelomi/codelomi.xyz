const button = document.getElementById("theme-toggle");
const body = document.body;

button.addEventListener("click", () => {
  // Önce simgeyi kaydırıp dönme efekti eklemek için
  button.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  button.style.opacity = "0";
  button.style.transform = "rotate(180deg)";

  setTimeout(() => {
    // Tema değişikliği
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      button.textContent = "☀️";
      localStorage.setItem("theme", "dark");
    } else {
      button.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }

    // Yeni simgeyi görünür yapmak için
    button.style.opacity = "1";
    button.style.transform = "rotate(360deg)";

    // Bitim sonrası dönüşü sıfırla
    setTimeout(() => {
      button.style.transform = "rotate(0deg)";
    }, 500);
  }, 250);
});

// Sayfa açıldığında eski tercihi yükle
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  button.textContent = "☀️";
}
