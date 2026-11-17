
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");

    function applyTheme(theme) {
        document.documentElement.classList.toggle("dark", theme === "dark");

        if (themeToggle) {
            themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
        }

        localStorage.setItem("codenest-theme", theme);
    }

    const savedTheme = localStorage.getItem("codenest-theme") || "light";
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const isDark = document.documentElement.classList.contains("dark");
            applyTheme(isDark ? "light" : "dark");
        });
    }
});