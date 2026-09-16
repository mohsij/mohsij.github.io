// Mobile sidebar toggle. The sidebar is always in the DOM; on narrow screens it
// slides in and out via the `nav-open` class on <body>.
(function () {
  var toggle = document.querySelector(".sidebar-toggle");
  var backdrop = document.querySelector(".sidebar-backdrop");
  var sidebar = document.querySelector(".sidebar");

  if (!toggle || !sidebar) return;

  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function () {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  if (backdrop) {
    backdrop.addEventListener("click", function () {
      setOpen(false);
    });
  }

  // Close after following a link, and on Escape.
  sidebar.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });
})();
