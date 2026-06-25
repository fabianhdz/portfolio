/* ============================================================
   Fabian Hernandez Flores — Portfolio interactions
   - Active-section highlighting on the side rail
   - Scroll-progress fill
   - Reveal-on-scroll
   - Footer year
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Active-section highlighting (side rail) ---------- */
  const navLinks = Array.from(document.querySelectorAll(".rail__link"));

  // Map each section id -> all links pointing at it (nav pill + rail icon)
  const linksById = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    if (!linksById.has(id)) linksById.set(id, []);
    linksById.get(id).push(link);
  });

  const sections = Array.from(linksById.keys())
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("is-active"));
            (linksById.get(entry.target.id) || []).forEach((l) =>
              l.classList.add("is-active")
            );
          }
        });
      },
      // Trigger when a section sits in the upper-middle band of the viewport
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => spy.observe(section));
  }

  /* ---------- Scroll-progress fill on the side rail ---------- */
  const railFill = document.querySelector(".rail__fill");
  if (railFill) {
    const docEl = document.documentElement;
    let ticking = false;

    function updateProgress() {
      const max = docEl.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      railFill.style.setProperty("--rail-progress", String(ratio));
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateProgress();
  }

  /* ---------- Reveal-on-scroll ---------- */
  const revealTargets = document.querySelectorAll(
    ".section__head, .card, .skills__group, .hero__about, .hero__cta, .contact__links"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const revealer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach((el) => revealer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Resume: download AND open in a new tab ---------- */
  const resumeBtn = document.getElementById("resume-btn");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const href = resumeBtn.getAttribute("href");
      const fileName = resumeBtn.getAttribute("download") || "resume.pdf";

      // 1) Trigger a download via a temporary anchor
      const dl = document.createElement("a");
      dl.href = href;
      dl.download = fileName;
      document.body.appendChild(dl);
      dl.click();
      document.body.removeChild(dl);

      // 2) Also open the PDF in a new tab
      window.open(href, "_blank", "noopener");
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
