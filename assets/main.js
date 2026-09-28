// Otevírací doba – denně 13:00–18:00 (od 21. 9. 2026, dle Instagramu) (při změně upravit i texty v index.html)
const HOURS = { open: 13 * 60, close: 18 * 60 };

(function status() {
  const el = document.getElementById("status");
  if (!el) return;
  // čas v Česku bez ohledu na časové pásmo návštěvníka
  const parts = new Intl.DateTimeFormat("cs-CZ", { timeZone: "Europe/Prague", hour: "2-digit", minute: "2-digit", hour12: false })
    .formatToParts(new Date());
  const h = +parts.find(p => p.type === "hour").value;
  const m = +parts.find(p => p.type === "minute").value;
  const now = h * 60 + m;
  const label = el.querySelector("span");
  if (now >= HOURS.open && now < HOURS.close) {
    el.classList.add("is-open");
    label.textContent = "Právě otevřeno · do 18:00";
  } else if (now < HOURS.open) {
    label.textContent = "Zavřeno · otevíráme ve 13:00";
  } else {
    label.textContent = "Zavřeno · zítra od 13:00";
  }
})();

// Mobilní menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = burger.getAttribute("aria-expanded") !== "true";
  burger.setAttribute("aria-expanded", open);
  nav.classList.toggle("is-open", open);
});
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    burger.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

// Linka pod hlavičkou po odscrollování
const header = document.querySelector(".top");
addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 8), { passive: true });

// Jemné vynoření bloků
const targets = document.querySelectorAll(".card, .flavours, .board, .place, .route li, .quotes blockquote, .map");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.15 });
  targets.forEach(t => { t.classList.add("reveal"); io.observe(t); });
}

document.getElementById("year").textContent = new Date().getFullYear();
