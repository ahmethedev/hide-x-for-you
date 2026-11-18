(() => {
  const root = document.documentElement;
  const CLICK_COOLDOWN_MS = 500;
  let scheduled = false;
  let lastClick = 0;

  function getHomeTabs() {
    const list = document.querySelector(
      '[data-testid="primaryColumn"] [role="tablist"]:has(> * > [role="tab"])'
    );
    return list ? list.querySelectorAll('[role="tab"]') : [];
  }

  function update() {
    scheduled = false;

    const onHome = location.pathname === '/home';
    root.classList.toggle('hfy-home', onHome);
    if (!onHome) {
      root.classList.remove('hfy-foryou');
      return;
    }

    // Sekme sırası: [For you, Following, ...sabitlenmiş listeler]
    const tabs = getHomeTabs();
    const forYouActive = tabs.length >= 2 && tabs[0].getAttribute('aria-selected') === 'true';
    root.classList.toggle('hfy-foryou', forYouActive);

    if (forYouActive && Date.now() - lastClick > CLICK_COOLDOWN_MS) {
      lastClick = Date.now();
      tabs[1].click();
    }
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }

  // X tek sayfalı bir uygulama: sayfa geçişlerini ve sekme değişimlerini DOM üzerinden yakala.
  new MutationObserver(schedule).observe(root, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['aria-selected'],
  });
  window.addEventListener('popstate', schedule);

  update();
})();
