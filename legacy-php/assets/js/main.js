(function () {
  var header = document.querySelector(".site-header");
  var megaBtns = document.querySelectorAll("[data-mega]");
  var megas = document.querySelectorAll(".mega");
  var menuToggle = document.querySelector(".menu-toggle");
  var drawer = document.querySelector(".mobile-drawer");
  var openMega = null;

  function setScrolled() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40 || !!openMega);
    header.classList.toggle("mega-open", !!openMega);
  }

  window.addEventListener("scroll", setScrolled, { passive: true });
  setScrolled();

  megaBtns.forEach(function (btn) {
    var key = btn.getAttribute("data-mega");
    var panel = document.querySelector('.mega[data-panel="' + key + '"]');
    if (!panel) return;

    btn.addEventListener("mouseenter", function () {
      megas.forEach(function (m) { m.classList.remove("open"); });
      panel.classList.add("open");
      openMega = key;
      setScrolled();
    });
  });

  if (header) {
    header.addEventListener("mouseleave", function () {
      megas.forEach(function (m) { m.classList.remove("open"); });
      openMega = null;
      setScrolled();
    });
  }

  if (menuToggle && drawer) {
    menuToggle.addEventListener("click", function () {
      drawer.classList.toggle("open");
      document.body.style.overflow = drawer.classList.contains("open") ? "hidden" : "";
      menuToggle.setAttribute(
        "aria-label",
        drawer.classList.contains("open") ? "Close menu" : "Open menu"
      );
    });
  }

  // Hero slider
  var slides = document.querySelectorAll("[data-slide]");
  var dots = document.querySelectorAll("[data-dot]");
  var labels = document.querySelectorAll("[data-label]");
  var titleEl = document.querySelector("[data-hero-title]");
  var descEl = document.querySelector("[data-hero-desc]");
  var linkEl = document.querySelector("[data-hero-link]");
  var photos = document.querySelectorAll("[data-hero-photo]");
  var idx = 0;
  var timer;

  function showSlide(i) {
    if (!slides.length) return;
    idx = (i + slides.length) % slides.length;
    var s = slides[idx];
    if (titleEl) titleEl.textContent = s.getAttribute("data-title");
    if (descEl) descEl.textContent = s.getAttribute("data-desc");
    if (linkEl) {
      linkEl.href = s.getAttribute("data-href");
      linkEl.textContent = "Explore " + s.getAttribute("data-title");
    }
    dots.forEach(function (d, n) { d.classList.toggle("active", n === idx); });
    labels.forEach(function (d, n) { d.classList.toggle("active", n === idx); });
    photos.forEach(function (p, n) { p.classList.toggle("active", n === idx); });
  }

  function startTimer() {
    clearInterval(timer);
    if (slides.length < 2) return;
    timer = setInterval(function () { showSlide(idx + 1); }, 5500);
  }

  dots.forEach(function (d, n) {
    d.addEventListener("click", function () { showSlide(n); startTimer(); });
  });
  labels.forEach(function (d, n) {
    d.addEventListener("click", function () { showSlide(n); startTimer(); });
  });
  if (slides.length) {
    showSlide(0);
    startTimer();
  }

  // Fade-up
  var fades = document.querySelectorAll(".fade-up");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    fades.forEach(function (el) { io.observe(el); });
  } else {
    fades.forEach(function (el) { el.classList.add("in"); });
  }

  // Counters
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target;
          var target = parseInt(el.getAttribute("data-count"), 10) || 0;
          var suffix = el.getAttribute("data-suffix") || "";
          var start = null;
          function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / 1800, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          cio.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = el.getAttribute("data-count") + (el.getAttribute("data-suffix") || "");
    });
  }

  // Insights filter
  var filterBtns = document.querySelectorAll("[data-filter]");
  var articles = document.querySelectorAll("[data-category]");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var cat = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      articles.forEach(function (a) {
        var show = cat === "All" || a.getAttribute("data-category") === cat;
        a.style.display = show ? "" : "none";
      });
    });
  });
})();
