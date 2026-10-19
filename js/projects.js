/* Progressive enhancement for the static project catalog. */
(function () {
  "use strict";

  const catalog = document.getElementById("project-catalog");
  const filters = document.querySelector(".catalog-filters");
  if (!catalog || !filters) return;

  const filter = document.getElementById("project-filter");
  const options = Array.from(filter.options);
  const results = document.getElementById("filtered-results");
  const grid = document.getElementById("filtered-grid");
  const title = document.getElementById("filtered-title");
  const status = document.getElementById("catalog-status");
  const empty = document.getElementById("catalog-empty");
  const emptyCategory = document.getElementById("empty-category");
  const railLinks = Array.from(document.querySelectorAll(".rail__link"));
  const reset = document.getElementById("reset-filter");
  const explore = document.getElementById("explore");

  // Keep the original nodes and their home grids: filters never duplicate cards.
  const projects = Array.from(catalog.querySelectorAll("[data-category]")).map((card) => ({
    card,
    home: card.parentElement,
    tags: card.dataset.tags.split(/\s+/),
  }));

  function applyFilter(value) {
    const selected = options.find((option) => option.value === value);
    if (!selected) return;

    const showAll = value === "all";
    const label = selected.textContent.trim();
    const matches = projects.filter((project) => showAll || project.tags.includes(value));

    // Restore every card in its original section and order before selecting again.
    projects.forEach(({ card, home }) => home.appendChild(card));

    if (!showAll) {
      matches.forEach(({ card }) => {
        card.classList.add("is-visible");
        grid.appendChild(card);
      });
    }

    catalog.hidden = !showAll;
    results.hidden = showAll;
    empty.hidden = showAll || matches.length > 0;
    grid.hidden = !showAll && matches.length === 0;
    title.textContent = label;
    emptyCategory.textContent = label;
    status.textContent = showAll
      ? `${projects.length} projects`
      : `${matches.length} ${matches.length === 1 ? "project" : "projects"} in ${label}`;

    filter.value = value;
    railLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${value}`);
    });
  }

  function returnToFilters(value) {
    applyFilter(value);
    filter.focus({ preventScroll: true });
    explore.scrollIntoView({ block: "start" });
  }

  filter.addEventListener("change", () => applyFilter(filter.value));

  railLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Restore the sections before the browser follows the category anchor.
      if (filter.value !== "all") applyFilter("all");
    });
  });

  reset.addEventListener("click", () => returnToFilters("all"));
  applyFilter("all");
  filters.hidden = false;
})();
