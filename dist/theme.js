(() => {
  const storageKey = "portfolio-inspiration-theme";
  const systemTheme = matchMedia("(prefers-color-scheme: dark)");
  const root = document.documentElement;
  let preference;

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === "light" || saved === "dark") preference = saved;
  } catch {
    // Storage can be unavailable when browsing a local file.
  }

  const activeTheme = () => preference ?? (systemTheme.matches ? "dark" : "light");
  root.dataset.theme = activeTheme();

  document.addEventListener("DOMContentLoaded", () => {
    const picker = document.querySelector(".theme-switch");
    const options = picker.querySelectorAll('input[name="theme"]');
    const themeColor = document.querySelector('meta[name="theme-color"]');

    function renderTheme() {
      const theme = activeTheme();
      root.dataset.theme = theme;
      for (const option of options) option.checked = option.value === theme;
      themeColor.content = getComputedStyle(root).getPropertyValue("--page-bg").trim();
    }

    function selectTheme(event) {
      const option = event.target;
      if (option.name !== "theme" || !option.checked || option.value === preference) return;

      preference = option.value;
      renderTheme();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // The selected theme still works for this page.
      }
    }

    renderTheme();
    picker.hidden = false;
    picker.addEventListener("change", selectTheme);
    // Clicking the already checked option also makes it an explicit preference.
    picker.addEventListener("click", selectTheme);
    systemTheme.addEventListener("change", renderTheme);
  }, { once: true });
})();
