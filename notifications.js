const bell = document.getElementById("bell");
const panel = document.getElementById("notificationPanel");

bell.addEventListener("click", () => {
    panel.style.display = 
        panel.style.display === "block" ? "none" : "block";
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!bell.contains(e.target) && !panel.contains(e.target)) {
        panel.style.display = "none";
    }
});