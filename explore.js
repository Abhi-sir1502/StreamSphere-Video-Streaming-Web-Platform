document.querySelectorAll(".trend-card").forEach(card => {
    card.onclick = () => {
        alert("Showing trending content...");
    };
});

document.querySelector(".creator button").onclick = () => {
    alert("Subscribed successfully!");
};