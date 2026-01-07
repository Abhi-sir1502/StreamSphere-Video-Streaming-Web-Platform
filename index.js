document.addEventListener("DOMContentLoaded", () => {

  const profileBtn = document.getElementById("profileBtn");
  const profileMenu = document.getElementById("profileMenu");

  const bellBtn = document.getElementById("bellBtn");
  const notificationBox = document.getElementById("notificationBox");

  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.querySelector(".sidebar");
  const container = document.querySelector(".container");

  /* ===== PROFILE TOGGLE ===== */
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profileMenu.style.display =
      profileMenu.style.display === "block" ? "none" : "block";

    notificationBox.style.display = "none";
  });

  /* ===== NOTIFICATION TOGGLE ===== */
  bellBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    notificationBox.style.display =
      notificationBox.style.display === "block" ? "none" : "block";

    profileMenu.style.display = "none";
  });

  /* ===== CLOSE BOTH ON OUTSIDE CLICK ===== */
  document.addEventListener("click", () => {
    profileMenu.style.display = "none";
    notificationBox.style.display = "none";
  });

  /* ===== SIDEBAR TOGGLE ===== */
  menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
  });

});

function toggleMenu(id) {
  document.querySelectorAll('.menu').forEach(menu => {
    if (menu.id !== id) menu.style.display = 'none';
  });

  let menu = document.getElementById(id);
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}