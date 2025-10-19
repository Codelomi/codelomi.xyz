let dark = false;

function DarkMode() {
    dark = !dark;

    if (dark) {
        document.body.style.backgroundImage = "linear-gradient(to right, black, black ,green,#671a74ff)";
        document.getElementById("darkMode").innerText = "🌤"
    } else {
        document.body.style.backgroundImage = "linear-gradient(to right,  #671a74ff, #9c27b0,green, black)";
        document.getElementById("darkMode").innerText = "🌙"
    }

    localStorage.setItem("darkMode", dark)
    
}

window.onload = function () {
    dark = localStorage.getItem("darkMode") === "true"; // önce değeri al
    if (dark) {
        document.body.style.backgroundImage = "linear-gradient(to right, black, black ,green, #671a74ff)";
        document.getElementById("darkMode").innerText = "🌤";
    } else {
        document.body.style.backgroundImage = "linear-gradient(to right,  #671a74ff,  #9c27b0,green, black)";
        document.getElementById("darkMode").innerText = "🌙";
    }
} 
