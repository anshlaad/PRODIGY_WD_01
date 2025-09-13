// Change navbar style on scroll
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

// Close menu after clicking a link (mobile view)
document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("active");
  });
});
