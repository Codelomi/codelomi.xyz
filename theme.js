const button = document.getElementById("theme-toggle");
const body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    button.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    button.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});

// Sayfa açıldığında eski tercihi yükle
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  button.textContent = "☀️ Light Mode";
}