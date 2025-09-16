const checkbox = document.getElementById("checkbox");

// Sayfa açıldığında daha önce seçilmiş tema varsa uygula
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  checkbox.checked = true;
}

// Toggle olunca tema değiştir
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
