(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("somaflo-lang"); } catch (e) { /* storage blocked */ }
  var nav = (navigator.language || "").toLowerCase();
  var hash = (location.hash || "").replace("#", "");
  var lang = (hash === "ru" || hash === "en") ? hash : saved || (/^(ru|uk|be|kk)/.test(nav) ? "ru" : "en");
  apply(lang);

  function apply(value) {
    root.setAttribute("data-lang", value);
    root.setAttribute("lang", value);
    var title = root.getAttribute("data-title-" + value);
    if (title) document.title = title;
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-set]");
    if (!button) return;
    var value = button.getAttribute("data-set");
    apply(value);
    try { localStorage.setItem("somaflo-lang", value); } catch (e) { /* storage blocked */ }
  });
})();
